import WDwloadM3u8 from './src/WDwloadM3u8.mjs'


async function test() {

    //url
    let url = `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`
    // let url = `https://ikcdn01.ikzybf.com/20221214/IEiv7MwN/index.m3u8` //長影片
    // let url = `https://ikcdn01.ikzybf.com/20240219/jyyK8mSn/index.m3u8` //m3u8的method為NONE, 僅產生ts
    // let url = `https://vip.lz-cdn1.com/20220806/13586_3379934e/index.m3u8` //大量part合併ts

    //fp
    let fp = './x36xhzz.mp4'

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

//node g.mjs
