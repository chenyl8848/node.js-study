// 1.导入 fs 模块
const fs = require('fs')

// 2.创建读取流对象
const rs = fs.createReadStream('./观书有感.txt');

// 3.绑定 data 事件
rs.on('data', chunk => {
    // chunk:块儿、大块儿
    console.log(chunk)
    console.log(chunk.length)
    console.log(chunk.toString())
})

// 4.结束事件（可选）
rs.on('end', () => {
    console.log('文件读取完成')
})