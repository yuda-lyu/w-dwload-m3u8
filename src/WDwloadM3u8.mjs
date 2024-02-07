import path from 'path'
import fs from 'fs'
import process from 'process'
import get from 'lodash/get'
import filter from 'lodash/filter'
import size from 'lodash/size'
import genID from 'wsemi/src/genID.mjs'
import now2strp from 'wsemi/src/now2strp.mjs'
import getFileNameExt from 'wsemi/src/getFileNameExt.mjs'
import j2o from 'wsemi/src/j2o.mjs'
import isbol from 'wsemi/src/isbol.mjs'
import isestr from 'wsemi/src/isestr.mjs'
import isfun from 'wsemi/src/isfun.mjs'
import execProcess from 'wsemi/src/execProcess.mjs'
import fsIsFile from 'wsemi/src/fsIsFile.mjs'
import fsIsFolder from 'wsemi/src/fsIsFolder.mjs'
import fsCopyFile from 'wsemi/src/fsCopyFile.mjs'
import fsCleanFolder from 'wsemi/src/fsCleanFolder.mjs'
import fsDeleteFile from 'wsemi/src/fsDeleteFile.mjs'
import fsDeleteFolder from 'wsemi/src/fsDeleteFolder.mjs'
import fsTreeFolder from 'wsemi/src/fsTreeFolder.mjs'


let fdSrv = path.resolve()


function isWindows() {
    return process.platform === 'win32'
}


/**
 * 下載m3u8檔案，核心調用N_m3u8DL-CLI，只能用於Windows作業系統
 *
 * N_m3u8DL-CLI: https://github.com/nilaoda/N_m3u8DL-CLI
 *
 * @param {String} url 輸入m3u8網址字串
 * @param {String} fp 輸入儲存mp4檔案路徑字串
 * @param {Object} [opt={}] 輸入設定物件，預設{}
 * @param {Boolean} [opt.clean=false] 輸入預先清除暫存檔布林值，預設false
 * @param {Function} [opt.funProg=null] 輸入回傳進度函數，傳入參數為prog代表進度百分比、nn代表當前已下載ts檔案數量、na代表全部須下載ts檔案數量，預設null
 * @returns {Promise} 回傳Promise，resolve回傳成功訊息，reject回傳錯誤訊息
 * @example
 * import WDwloadM3u8 from './src/WDwloadM3u8.mjs'
 *
 * async function test() {
 *
 *     //url
 *     let url = `https://ikcdn01.ikzybf.com/20221214/IEiv7MwN/index.m3u8`
 *
 *     //fp
 *     let fp = './moon01.mp4'
 *
 *     //funProg
 *     let funProg = (prog, nn, na) => {
 *         console.log('prog', `${prog.toFixed(2)}%`, nn, na)
 *     }
 *
 *     //WDwloadM3u8
 *     await WDwloadM3u8(url, fp, {
 *         clean: true, //單一程序執行時, 事先清除之前暫存檔, 減少浪費硬碟空間
 *         funProg,
 *     })
 *
 *     console.log('done:', fp)
 * }
 * test()
 *     .catch((err) => {
 *         console.log('catch', err)
 *     })
 * // prog 0.14% 1 708
 * // prog 1.41% 10 708
 * // ...
 * // prog 99.86% 707 708
 * // prog 100.00% 708 708
 * // done: ./moon01.mp4
 *
 */
async function WDwloadM3u8(url, fp, opt = {}) {
    let errTemp = null

    //clean
    let clean = get(opt, 'clean')
    if (!isbol(clean)) {
        clean = false
    }

    //funProg
    let funProg = get(opt, 'funProg')

    //isWindows
    if (!isWindows()) {
        return Promise.reject('operating system is not windows')
    }

    //check
    if (!isestr(url)) {
        return Promise.reject('url is not a file')
    }

    //fdExe
    let fdms = 'N_m3u8DL-CLI-3.0.2'
    let fdExeSelf = `${fdSrv}/${fdms}/`
    let fdExeDist = `${fdSrv}/node_modules/w-dwload-m3u8/${fdms}/`
    let fdExe = fdExeSelf
    if (fsIsFolder(fdExeDist)) {
        fdExe = fdExeDist
    }

    //prog
    let prog = path.resolve(fdExe, 'N_m3u8DL-CLI.exe')
    prog = `"${prog}"` //用雙引號包住避免路徑有空格
    // console.log('prog', prog)

    //cwdOri, cwdTar
    let cwdOri = process.cwd()
    let cwdTar = fdExe
    // console.log('process.cwd1', process.cwd())

    //chdir, 若不切換mseed2ascii預設輸出檔案是在工作路徑, 輸出檔變成會出現在專案下
    process.chdir(cwdTar)
    // console.log('process.cwd2', process.cwd())

    //id
    let id = `${now2strp()}-${genID(6)}`

    //fn
    let fn = `${id}.mp4`

    //cmd
    let cmd = `"${url}" --saveName "${id}"`
    // console.log('cmd', cmd)

    //fdDownloads
    let fdDownloads = path.resolve(fdExe, 'Downloads')
    // console.log('fdDownloads', fdDownloads)

    //fdLogs
    let fdLogs = path.resolve(fdExe, 'Logs')
    // console.log('fdLogs', fdLogs)

    //clean
    if (clean) {
        fsCleanFolder(fdDownloads)
        fsCleanFolder(fdLogs)
    }

    //fdDownloadsId
    let fdDownloadsId = path.resolve(fdDownloads, id)
    // console.log('fdDownloadsId', fdDownloadsId)

    //fdDownloadsIdPart
    let fdDownloadsIdPart = path.resolve(fdDownloadsId, 'Part_0')
    // console.log('fdDownloadsIdPart', fdDownloadsIdPart)

    //fpIn
    let fpIn = path.resolve(fdDownloads, fn)
    // console.log('fpIn', fpIn)

    //fpDownloadsIdMeta
    let fpDownloadsIdMeta = path.resolve(fdDownloadsId, 'meta.json')
    // console.log('fpDownloadsIdMeta', fpDownloadsIdMeta)

    //監測進度
    let om = null
    let bFunProg = isfun(funProg)
    let nnPre = -1
    let t = setInterval(() => {

        //na
        let na = get(om, 'm3u8Info.count', 0)
        if (na === 0) {
            if (fsIsFile(fpDownloadsIdMeta)) {
                let j = fs.readFileSync(fpDownloadsIdMeta, 'utf8')
                om = j2o(j)
            }
        }
        // console.log('om', om)
        // console.log('na', na)

        //nn
        let vps = []
        if (fsIsFolder(fdDownloadsIdPart)) {
            vps = fsTreeFolder(fdDownloadsIdPart)
            // console.log('vps(ori)', vps)
            vps = filter(vps, (v) => {
                let ext = getFileNameExt(v.name)
                return ext === 'ts'
            })
            // console.log('vps(filter)', vps)
        }
        let nn = size(vps)
        // console.log('nn', nn)

        //prog
        if (na > 0 && nnPre !== nn) {
            let prog = nn / na * 100
            // console.log('prog', prog)
            if (bFunProg) {
                // console.log('prog', nn, na, prog)
                funProg(prog, nn, na)
            }
        }

        //update
        nnPre = nn

    }, 1000)

    //execProcess
    await execProcess(prog, cmd)
        // .then(function(res) {
        //     console.log('execProcess then', res)
        // })
        .catch((err) => {
            console.log('execProcess catch', err)
            errTemp = 'execProcess error'
        })
        // .finally(() => {
        // })

    //clearInterval
    clearInterval(t)

    //chdir, 不論正常或錯誤皆需還原工作路徑
    process.chdir(cwdOri)

    //check
    if (isestr(errTemp)) {
        return Promise.reject(errTemp)
    }

    //check
    if (!fsIsFile(fpIn)) {
        errTemp = `can not find the merged file[${fn}]`
        return Promise.reject(errTemp)
    }

    //fpOut
    let fpOut = fp
    // console.log('fpOut', fpOut)

    let rc

    //fsCopyFile
    rc = fsCopyFile(fpIn, fpOut)
    errTemp = get(rc, 'error')
    if (errTemp) {
        return Promise.reject(errTemp.toString())
    }

    //fsDeleteFile
    rc = fsDeleteFile(fpIn)
    errTemp = get(rc, 'error')
    if (errTemp) {
        return Promise.reject(errTemp.toString())
    }

    //fsDeleteFolder
    rc = fsDeleteFolder(fdDownloadsId)
    errTemp = get(rc, 'error')
    if (errTemp) {
        return Promise.reject(errTemp.toString())
    }

    //fsCleanFolder
    rc = fsCleanFolder(fdLogs)
    errTemp = get(rc, 'error')
    if (errTemp) {
        return Promise.reject(errTemp.toString())
    }

    return 'ok'
}


export default WDwloadM3u8
