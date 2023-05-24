// 引入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/hello', (req, resp) => {
    // 原生响应
    // resp.statusCode = 404 
    // resp.statusMessage = 'Not Found'
    // resp.setHeader('aaaa', 'bbbb')
    // resp.write('hello express ')

    // express 操作
    // resp.status(500)
    // resp.set('aaa', '123')
    // 自动返回 utf8 编码。此时无需再写 resp.end()
    // resp.send('hello express ')

    // 可以链式调用
    resp.status(500).set('xxx', 'yyy').send('你好，世界')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})