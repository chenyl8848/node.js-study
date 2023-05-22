// 1.引入 http 模块
const http = require('http')

// 2.创建 http 服务
const server = http.createServer((request, response) => {
    
    // response.end 设置响应体 必须要返回，且只能返回一次
    // 多个 response.end 报错 Error [ERR_STREAM_WRITE_AFTER_END]: write after end
    // response.end("hello world")
    // response.end("hello world")

    // 解决中文乱码
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.end('你好，世界')
})

// 3.启动服务并监听端口
server.listen(9000, () => {
    console.log('http 服务启动成功')
})