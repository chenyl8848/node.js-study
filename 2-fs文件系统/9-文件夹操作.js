// 1.引入 fs 模块
const fs = require('fs')

// 2.创建文件夹
// mkdir make:制作 directory:目录 
// fs.mkdir('./html', error => {
//     if (error) {
//         console.log('创建目录失败', error)
//         return;
//     }
//     console.log('创建目录成功')
// })

// 3.递归创建文件夹
// fs.mkdir('./a/b/c', {
//     recursive: true
// }, error => {
//     if (error) {
//         console.log("递归创建文件夹失败", error)
//         return;
//     }
//     console.log('递归创建文件夹成功')
// })

// 4.读取文件夹
// readdir read:读取 dir:directory 目录
// fs.readdir('./', (error, data) => {
//     if (error) {
//         console.log('读取文件夹错误', error)
//         return;
//     }
//     // [
//     //     '1-文件写入.js',
//     //     '2-追加写入.js',
//     //     '3-流式写入.js',
//     //     '4-文件读取.js',
//     //     '5-流式读取.js',
//     //     '6-练习-文件复制.js',
//     //     '7-文件重命名与移动.js',
//     //     '8-删除文件.js',
//     //     '9-文件夹操作.js',
//     //     'a',
//     //     'html',
//     //     '座右铭.txt',
//     //     '文件',
//     //     '观书有感.txt'
//     // ]
//     console.log(data)
// })

// 5.删除文件夹
// fs.rmdir('./文件', error => {
//     if (error) {
//         console.log('删除文件夹失败', error)
//         return;
//     }
//     console.log('删除文件夹成功')
// })

// 6.递归删除文件夹 
// 递归删除文件夹失败 [Error: ENOTEMPTY: directory not empty, rmdir 'E:\JavaEE\frontend\nodejs-study\2-fs文件系统\a'] 

// 不推荐使用
// fs.rmdir('./a', {recursive: true}, error => {
//     if (error) {
//         console.log('递归删除文件夹失败', error)
//         return ;
//     }
//     console.log('递归删除文件夹成功')
// })

// 推荐使用
fs.rm('./a', {recursive: true}, error => {
    if (error) {
        console.log('递归删除文件失败', error)
        return;
    }
    console.log('递归删除文件成功')
})