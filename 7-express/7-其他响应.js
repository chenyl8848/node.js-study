// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/hello', (req, resp) => {
    // resp.end('hello world')

    // 重定向
    // resp.redirect('https://www.baidu.com')

    // 下载响应
    // resp.download(__dirname + '/singers.json')

    // 返回json
    // resp.json({
    //     username: '张三',
    //     age: 18
    // })

    // 返回文件内容
    resp.sendFile(__dirname + '/2-form.html')
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})