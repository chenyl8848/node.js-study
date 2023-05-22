// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
    
    // 1.设置响应状态码
    // response.statusCode = 200
    // response.statusCode = 404

    // 2.设置响应信息 不常用
    // response.statusMessage = 'hello world'

    // 3.设置响应头
    response.setHeader('content-type', 'text/html;charset=utf-8')
    response.setHeader('Server', 'Node.js')
    response.setHeader('myHeader', 'myHeader')
    response.setHeader('test', ['love', 'love', 'love'])

    // 4.设置响应体
    response.write('love\r\n')
    response.write('love\r\n')
    response.write('love\r\n')
    response.write('love\r\n')

    response.end('hello world')

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})