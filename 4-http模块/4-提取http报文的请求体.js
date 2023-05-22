// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
    
    // 1.声明一个变量
    let body = ''

    // 2.绑定 data 事件
    request.on('data', chunk => {
        body += chunk
    })

    // 3.绑定 end 事件
    request.on('end', () => {
        console.log(body)
        response.end("hello world")
    })

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})

