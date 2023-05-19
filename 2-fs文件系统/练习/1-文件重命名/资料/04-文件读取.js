// 1.引入 fs 模块
const fs = require('fs')

// 2.异步读取
// fs.readFile('./座右铭.txt', (error, data) => {
//     if (error) {
//         console.log('文件读取错误')
//         return
//     }
//     console.log(data.toString())
// })

// 3.同步读取
let data = fs.readFileSync('./座右铭.txt');
console.log(data.toString())