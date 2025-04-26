# w-dwload-m3u8
A download tool for m3u8.

![language](https://img.shields.io/badge/language-JavaScript-orange.svg) 
[![npm version](http://img.shields.io/npm/v/w-dwload-m3u8.svg?style=flat)](https://npmjs.org/package/w-dwload-m3u8) 
[![license](https://img.shields.io/npm/l/w-dwload-m3u8.svg?style=flat)](https://npmjs.org/package/w-dwload-m3u8) 
[![npm download](https://img.shields.io/npm/dt/w-dwload-m3u8.svg)](https://npmjs.org/package/w-dwload-m3u8) 
[![npm download](https://img.shields.io/npm/dm/w-dwload-m3u8.svg)](https://npmjs.org/package/w-dwload-m3u8) 
[![jsdelivr download](https://img.shields.io/jsdelivr/npm/hm/w-dwload-m3u8.svg)](https://www.jsdelivr.com/package/npm/w-dwload-m3u8)

## Documentation
To view documentation or get support, visit [docs](https://yuda-lyu.github.io/w-dwload-m3u8/global.html).

## Core
> `w-dwload-m3u8` is basing on `N_m3u8DL-CLI`.

## Installation
### Using npm(ES6 module):
```alias
npm i w-dwload-m3u8
```

#### Example:
> **Link:** [[dev source code](https://github.com/yuda-lyu/w-dwload-m3u8/blob/master/g.mjs)]
```alias
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
```
