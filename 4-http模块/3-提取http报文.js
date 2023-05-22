// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
    // 获取请求的方法
    console.log(request.method)
    // 获取请求的 url
    console.log(request.url)
    // 获取 http 协议版本号
    console.log(request.httpVersion)
    // 获取请求头
    console.log(request.headers)
    // 获取请求主机地址
    console.log(request.headers.host)

    response.end("hello world")
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})

