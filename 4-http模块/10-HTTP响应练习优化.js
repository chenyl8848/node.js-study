/**
 * 需求：
 *  返回一个4行3列的表格，且要求表格有隔行换色效果，且点击单元格能高亮显示
 */


// 1.引入 http 模块
const http = require('http')

// 1.引入 fs 模块
const fs = require('fs')

// 2.创建服务
const server = http.createServer((request, response) => {

    // 2.读取文件内容
    let file = fs.readFileSync(__dirname + '/10-table.html')

    response.end(file)

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})