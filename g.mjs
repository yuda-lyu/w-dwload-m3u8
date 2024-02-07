import WDwloadM3u8 from './src/WDwloadM3u8.mjs'


async function test() {

    //url
    let url = `https://ikcdn01.ikzybf.com/20221214/IEiv7MwN/index.m3u8`

    //fp
    let fp = './moon01.mp4'

    //funProg
    let funProg = (prog, nn, na) => {
        console.log('prog', `${prog.toFixed(2)}%`, nn, na)
    }

    //WDwloadM3u8
    await WDwloadM3u8(url, fp, {
        clean: true, //單一程序執行時, 事先清除之前暫存檔, 減少浪費硬碟空間
        funProg,
    })

    console.log('done:', fp)
}
test()
    .catch((err) => {
        console.log('catch', err)
    })
// prog 0.14% 1 708
// prog 1.41% 10 708
// ...
// prog 99.86% 707 708
// prog 100.00% 708 708
// done: ./moon01.mp4

//node --experimental-modules --es-module-specifier-resolution=node g.mjs
