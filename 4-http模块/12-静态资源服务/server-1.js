/**
 * 需求：
 *  创建一个 HTTP 服务，端口为 9000，满足如下需求
 *      GET  /index.html        响应  page/index.html 的文件内容
 *      GET  /css/app.css       响应  page/css/app.css 的文件内容
 *      GET  /images/logo.png   响应  page/images/logo.png 的文件内容
 */

// 1.引入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 2.创建服务
const server = http.createServer((request, response) => {
    
    // 获取文件根路径
    let root = path.resolve(__dirname + '/page')
    // 获取文件路径
    let { pathname } = new URL(request.url, 'https://127.0.0.1:9000')
    // 拼接文件路径
    let filePath = root + pathname
    
    // 获取文件
    fs.readFile(filePath, (error, data) => {
        // 设置字符集，解决打开文件中文乱码的问题
        response.setHeader('content-type', 'text/html;charset=utf-8')

        if (error) {
            response.end('读取文件错误')
        } 

        response.end(data)
        return;
    })
})

// 3.启动服务并监听端口
server.listen(9000, () => {
    console.log('服务启动成功')
})