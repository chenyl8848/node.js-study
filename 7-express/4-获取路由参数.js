// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/:id/:token', (req, resp) => {
    console.log(req.params.id, req.params.token)
    resp.end('hello world')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})