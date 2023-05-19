// 1.引入 fs 模块
const fs = require('fs');

const content = '\r\n但使龙城飞将在，不教胡马度阴山';

// fs.appendFile('./座右铭.txt', content, error => {
//     // errror 为 null就是写入成功
//     if (error) {
//         console.log('文件追加写入失败')
//         return;
//     }
//     console.log('文件追加写入成功');
// })

// 同步文件追加写入
// fs.appendFileSync('./座右铭.txt', content)

// 使用 writeFile 的方式追加文件写入
fs.writeFile('./座右铭.txt', content, {flag: 'a'}, error => {
    if (error) {
        console.log('文件追加写入失败')
        return;
    }
    console.log('文件追加写入成功')
})

console.log('hello world')