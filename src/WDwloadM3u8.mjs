import path from 'path'
import fs from 'fs'
import process from 'process'
import get from 'lodash-es/get.js'
import filter from 'lodash-es/filter.js'
import size from 'lodash-es/size.js'
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
 *     let funProg = (prog, nn, nnTotal) => {
 *         console.log('prog', `${prog.toFixed(2)}%`, nn, nnTotal)
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

    //exeDl
    let exeDl = path.resolve(fdExe, 'N_m3u8DL-CLI.exe')
    exeDl = `"${exeDl}"` //用雙引號包住避免路徑有空格
    // console.log('exeDl', exeDl)

    //exeFfmpeg
    let exeFfmpeg = path.resolve(fdExe, 'ffmpeg.exe')
    exeFfmpeg = `"${exeFfmpeg}"` //用雙引號包住避免路徑有空格
    // console.log('exeFfmpeg', exeFfmpeg)

    //cwdOri, cwdTar
    let cwdOri = process.cwd()
    let cwdTar = fdExe
    // console.log('process.cwd1', process.cwd())

    //chdir, 若不切換mseed2ascii預設輸出檔案是在工作路徑, 輸出檔變成會出現在專案下
    process.chdir(cwdTar)
    // console.log('process.cwd2', process.cwd())

    //id
    let id = `${now2strp()}-${genID(6)}`

    //fnMp4
    let fnMp4 = `${id}.mp4`

    //fnTs
    let fnTs = `${id}.ts`

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

    // //fdDownloadsIdPart
    // let fdDownloadsIdPart = path.resolve(fdDownloadsId, 'Part_0') //可能會分拆資料夾儲存ts, 故不使用
    // // console.log('fdDownloadsIdPart', fdDownloadsIdPart)

    //fpInMp4
    let fpInMp4 = path.resolve(fdDownloads, fnMp4)
    // console.log('fpInMp4', fpInMp4)

    //fpInTs
    let fpInTs = path.resolve(fdDownloads, fnTs)
    // console.log('fpInTs', fpInTs)

    //fpDownloadsIdMeta
    let fpDownloadsIdMeta = path.resolve(fdDownloadsId, 'meta.json')
    // console.log('fpDownloadsIdMeta', fpDownloadsIdMeta)

    //監測進度
    let om = null
    let bFunProg = isfun(funProg)
    let nnPre = -1
    let nnMax = -1
    let nnTotal = 0
    let t = setInterval(() => {

        //nnTotal
        nnTotal = get(om, 'm3u8Info.count', 0)
        if (nnTotal === 0) {
            if (fsIsFile(fpDownloadsIdMeta)) {
                let j = fs.readFileSync(fpDownloadsIdMeta, 'utf8')
                om = j2o(j)
                nnTotal = get(om, 'm3u8Info.count', 0)
            }
        }
        // console.log('om', om)
        // console.log('nnTotal', nnTotal)

        //nn
        let vps = []
        try {
            vps = fsTreeFolder(fdDownloadsId, null)
        }
        catch (err) {
            // console.log(err)
            // errTemp = err.message
            // clearInterval(t)
        }
        // console.log('vps(ori)', vps)
        vps = filter(vps, (v) => {
            let ext = getFileNameExt(v.name)
            return ext === 'ts'
        })
        // console.log('vps(filter)', vps)
        let nn = size(vps)
        // console.log('nn', nn)

        //max
        nnMax = Math.max(nnMax, nn) //最後階段會依照各part資料夾各自產生合併ts, 會導致ts數量大減, 故須取最大值

        //limit
        nn = Math.max(nn, nnMax) //合併ts階段會導致ts數量大減, 故須取最大值
        nn = Math.min(nn, nnTotal) //因最後階段若為產生合併ts, 此時又剛好觸發偵測而nn會大於na(也就是nn-nnTotal=1), 故須限制nn最高為na

        //funProg
        if (nnTotal > 0 && nnPre !== nn) {
            let prog = nn / nnTotal * 99 //最高99%, 因可能還有轉檔, 故最後100%改由最後完成階段觸發
            // console.log('prog', prog)
            if (bFunProg) {
                // console.log('prog', nn, nnTotal, prog)
                funProg(prog, nn, nnTotal)
            }
        }

        //update
        nnPre = nn

    }, 1000)

    //cmdDl
    let cmdDl = `"${url}" --saveName "${id}"`
    // console.log('cmdDl', cmdDl)

    //execProcess
    await execProcess(exeDl, cmdDl)
        // .then(function(res) {
        //     console.log('execProcess then', res)
        // })
        .catch((err) => {
            console.log('execProcess catch', err)
            errTemp = 'execProcess error'
        })

    //clearInterval
    clearInterval(t)

    //chdir, 不論正常或錯誤皆需還原工作路徑
    process.chdir(cwdOri)

    //check
    if (isestr(errTemp)) {
        return Promise.reject(errTemp)
    }

    //check, 若因m3u8內method給NONE無法被N_m3u8DL-CLI識別處理, 故會採取僅合併ts不轉檔方式產生ts
    if (!fsIsFile(fpInMp4) && fsIsFile(fpInTs)) {

        //cmdFfmpeg
        let cmdFfmpeg = `-i "${fpInTs}" -vcodec copy -acodec copy "${fpInMp4}"`
        // console.log('cmdFfmpeg', cmdFfmpeg)

        //execProcess
        await execProcess(exeFfmpeg, cmdFfmpeg)
            // .then(function(res) {
            //     console.log('execProcess then', res)
            // })
            .catch(() => {
                //console.log('execProcess catch', err)
                //特殊偵測處理, 不再提供報錯訊尋
            })

    }

    //check
    if (!fsIsFile(fpInMp4)) {
        console.log(`can not find the merged file[${fnMp4}]`)
        errTemp = `invalid url[${url}] or can not download`
        return Promise.reject(errTemp)
    }

    //fpOut
    let fpOut = fp
    // console.log('fpOut', fpOut)

    let rc

    //fsCopyFile
    rc = fsCopyFile(fpInMp4, fpOut)
    errTemp = get(rc, 'error')
    if (errTemp) {
        return Promise.reject(errTemp.toString())
    }

    //fsDeleteFile
    rc = fsDeleteFile(fpInMp4)
    errTemp = get(rc, 'error')
    if (errTemp) {
        return Promise.reject(errTemp.toString())
    }

    //fsDeleteFile
    rc = fsDeleteFile(fpInTs)
    //可能無檔案無法刪, 故不檢查錯誤

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

    //funProg
    if (bFunProg) {
        funProg(100, nnTotal, nnTotal)
    }

    return 'ok'
}


export default WDwloadM3u8
