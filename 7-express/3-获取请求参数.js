// 引入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/hello', (req, resp) => {

    // 原生方式
    // console.log(req.method)
    // console.log(req.url)
    // console.log(req.httpVersion)
    // console.log(req.headers)

    // express 操作
    console.log(req.path)
    console.log(req.query)
    // 获取请求ip
    console.log(req.ip)

    resp.end('hello world')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})