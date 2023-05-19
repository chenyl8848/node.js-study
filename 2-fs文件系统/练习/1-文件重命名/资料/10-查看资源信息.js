// 1.引入 fs 模块
const fs = require('fs')

// 2.stat 方法 status 的缩写：状态
fs.stat('./观书有感.txt', (error, data) => {
    if (error) {
        console.log('操作失败', error)
        return;
    }
    // Stats {
    //     dev: 985301708,
    //     mode: 33206,
    //     nlink: 1,
    //     uid: 0,
    //     gid: 0,
    //     rdev: 0,
    //     blksize: 4096,
    //     ino: 281474979770305,
    //     size: 92,
    //     blocks: 0,
    //     atimeMs: 1684373309132.9426,
    //     mtimeMs: 1684289136772.1648,
    //     ctimeMs: 1684289136772.1648,
    //     birthtimeMs: 1684289136770.7136,
    //     atime: 2023 - 05 - 18 T01: 28: 29.133 Z,
    //     mtime: 2023 - 05 - 17 T02: 05: 36.772 Z,
    //     ctime: 2023 - 05 - 17 T02: 05: 36.772 Z,
    //     birthtime: 2023 - 05 - 17 T02: 05: 36.771 Z
    // }
    console.log(data)
    console.log(data.isFile())
    console.log(data.isDirectory())
})