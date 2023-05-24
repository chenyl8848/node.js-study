// 1.引入模块
const express = require('express')

// 2.创建服务
const app = express()

// 3.创建路由
app.get('/hello', (req, resp) => {
    resp.end('hello world')
})

// 4.启动服务并监听端口
app.listen(9000, () => {
    console.log('服务启动成功')
})