// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
// 导入路由
const admin = require('./routes/admin')
const home = require('./routes/home')

app.use(admin)
app.use(home)

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})