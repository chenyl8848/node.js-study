// 1.引入 fs 模块
const fs = require('fs')

// 2.调用 unlink 方法 
// unlinkSync:同步删除
// fs.unlink('./座右铭-3.txt', error => {
//     if (error) {
//         console.log('删除文件错误', error)
//         return;
//     }
//     console.log('删除文件成功')
// })

// 3.调用 rm 方法
// rmSync:同步删除
fs.rm('./文件/西汉名将.txt', error => {
    if (error) {
        console.log('文件删除失败', error)
        return;
    }
    console.log('文件删除成功')
})