// 1.引入模块
const express = require('express')

// 2.创建服务
const app = express()

// 3.创建路由
// get 请求
app.get('/hello', (req, resp) => {
    resp.end('hello world')
})

// 首页路由
app.get('/', (req, resp) => {
    resp.end('home')
})

// post 请求
app.post('/login', (req, resp) => {
    resp.end('login')
})

// 所有的请求方式都可以
app.all('/register', (req, resp) => {
    resp.end('register')
})

// 404
app.all('*', (req, resp) => {
    resp.end(`<h1>404 Not Found</h1>`)
})

// 4.启动服务并监听端口
app.listen(9000, () => {
    console.log('服务启动成功')
})