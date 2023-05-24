/**
 * 需求：
 *  记录每个请求的 ip 和 url
 */

// 引入模块
const express = require('express')
const fs = require('fs')
const path = require('path')

// 创建应用服务
const app = express()

// 创建全局路由中间件
let globalMiddleware = (req, resp, next) => {
    // 获取 url 和 ip
    let {ip, url} = req
    // 使用追加的方式记录到日志文件
    fs.appendFileSync(path.resolve(__dirname, './access.log'), `${ip} ${url} \r\n`)
    // 调用 next
    next()
}

// 使用全局路由中间件
app.use(globalMiddleware)

// 创建路由
app.get('/home', (req, resp) => {
    resp.send('前台首页')
})

app.get('/admin', (req, resp) => {
    resp.send('后台首页')
})

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})