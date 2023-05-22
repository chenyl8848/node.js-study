/**
 * 需求：
 *  根据不同的请求路径，返回不同的文件
 */

// 1.引入模块
const http = require('http')
const fs = require('fs')

// 2.创建服务
const server = http.createServer((request, response) => {
    
    // 获取请求路径
    let { pathname } = new URL(request.url, 'https://127.0.0.1:9000')
    if (pathname === '/') {
        // 获取要响应的文件
        let data = fs.readFileSync(__dirname + '/11-table.html')
        // 设置响应
        response.end(data)
    } else if (pathname === '/index.css') {
        // 获取要响应的文件
        let data = fs.readFileSync(__dirname + '/index.css')
        // 设置响应
        response.end(data)
    } else if (pathname === '/index.js') {
        // 获取要响应的文件
        let data = fs.readFileSync(__dirname + '/index.js')
        // 设置响应
        response.end(data)
    } else {
        response.end(`<h1>404 Not Found</h1>`)
    }
})

// 3.启动服务，并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})