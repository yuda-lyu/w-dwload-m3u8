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
import fs from 'fs'
import WDwloadM3u8 from './src/WDwloadM3u8.mjs'

async function test() {

    //url
    let url = `https://cdn.jsdelivr.net/npm/w-demores@1.0.28/res/video/aigen_hls/playlist.m3u8`
    // let url = `https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8`
    // let url = `https://ikcdn01.ikzybf.com/20221214/IEiv7MwN/index.m3u8` //長影片
    // let url = `https://ikcdn01.ikzybf.com/20240219/jyyK8mSn/index.m3u8` //m3u8的method為NONE, 僅產生ts
    // let url = `https://vip.lz-cdn1.com/20220806/13586_3379934e/index.m3u8` //大量part合併ts

    //fp
    let fp = './abc.mp4'

    //funProg
    let funProg = (prog, nn, na) => {
        console.log('prog', `${prog.toFixed(2)}%`, nn, na)
    }

    //WDwloadM3u8
    await WDwloadM3u8(url, fp, {
        clean: true, //單一程序執行時, 事先清除之前暫存檔, 減少浪費硬碟空間
        funProg,
    })

    //len
    let len = fs.statSync(fp).size
    console.log('len', len)

    console.log('done:', fp)
}
test()
    .catch((err) => {
        console.log('catch', err)
    })
// prog 0.00% 0 1
// prog 100.00% 1 1
// len 283236
// done: ./abc.mp4
```
