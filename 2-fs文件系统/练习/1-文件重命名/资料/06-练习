/**
 * 需求：
 *  复制【座右铭.txt】
 */

// 1.引入 fs 模块
const fs = require('fs');
// 全局对象，即 global 对象的属性，无须声明即可访问。它用于描述当前 Node 进程状态的对象，提供了一个与操作系统的简单接口。
const process = require('process')

// 方式一：使用 readFile
// 2.读取文件
// let data = fs.readFileSync('./座右铭.txt');

// // 3.写入文件
// fs.writeFileSync('./座右铭-2.txt', data);

// // 查看系统耗费内存
// // rss: 19795968 字节
// console.log(process.memoryUsage())

// 方式二：使用流式操作
// 2.创建流式读取
let rs = fs.createReadStream('./座右铭.txt');

// 3.创建流式写入
let ws = fs.createWriteStream('./座右铭-3.txt');

// // 4.绑定 data 事件
// rs.on('data', chunk => {
//     ws.write(chunk);
// })

// // 5.绑定 end 事件
// rs.on('end', () => {
//     // rss: 20885504 字节 相比于同步的方式占用内存会比较小
//     console.log(process.memoryUsage())
// })

// 4.使用 pipe(管道) 可直接复制
rs.pipe(ws)