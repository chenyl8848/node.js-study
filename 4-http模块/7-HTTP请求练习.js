/**
 * 需求：
 *  当请求方式为 get 请求时，请求路径为 /login 返回 login
 *  当请求方式为 get 请求时，请求路径为 /register 返回 register
 */

// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
    
    // 请求方式
    let { method } = request

    // 请求路径
    let { pathname } = new URL(request.url, 'http://127.0.0.1')

    if (method === 'GET' && pathname === '/login') {
        response.end('login')
    } else if (method === 'GET' && pathname === '/register') {
        response.end('register')
    } else {
        response.end('hello world')
    }
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})