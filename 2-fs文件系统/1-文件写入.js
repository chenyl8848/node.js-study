/**
 * 需求：
 *  新建一个文件：座右铭.txt 写入内容：封狼居胥，禅于姑衍，饮马瀚海
 */

// 1.导入 fs 模块
const fs = require('fs')

// 2.写入文件
// writeFile 异步写入，四个参数：1.文件路径 2.写入内容 3.配置信息 4.回调函数
// hello world
// 文件写入成功
fs.writeFile('./座右铭.txt', '封狼居胥，禅于姑衍，饮马瀚海', error => {
    // errror 为 null就是写入成功
    if (error) {
        console.log('文件写入失败')
        return;
    }
    console.log('文件写入成功')
});

// 同步写入，没有回调函数
// fs.writeFileSync('./座右铭.txt', '封狼居胥，禅于姑衍，饮马瀚海，燕石勒然')

console.log('hello world')