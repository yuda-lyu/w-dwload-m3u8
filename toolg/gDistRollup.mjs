import rollupFiles from 'w-package-tools/src/rollupFiles.mjs'
import getFiles from 'w-package-tools/src/getFiles.mjs'


let fdSrc = './src'
let fdTar = './dist'


rollupFiles({
    fns: 'WDwloadM3u8.mjs',
    fdSrc,
    fdTar,
    // nameDistType: 'kebabCase',
    hookNameDist: () => {
        return 'w-dwload-m3u8'
    },
    globals: {
        'path': 'path',
        'fs': 'fs',
        'process': 'process',
        'child_process': 'child_process',
    },
    external: [
        'path',
        'fs',
        'process',
        'child_process',
    ],
})

