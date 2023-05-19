// 1.导入 fs 模块
const fs = require('fs');

// 2.文件重命名
// fs.rename('./座右铭-2.txt', './西汉名将.txt', error => {
//     if (error) {
//         console.log('文件重命名失败')
//            return ;
//     }
//     console.log('文件重命名成功')
// })

// 3.文件移动
// 文件夹如果不存在，会报错误 Error: ENOENT: no such file or directory
fs.rename('./西汉名将.txt', './文件/西汉名将.txt', error => {
    if (error) {
        console.log(error, '移动文件出错');
        return ;
    }
    console.log('操作成功')
})