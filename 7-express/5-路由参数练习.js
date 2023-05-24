// 导入模块
const express = require('express')
const { singers } = require('./singers.json')

// 创建应用服务
const app = express()

// 创建路由
app.get('/:id.html', (req, resp) => {
    // 获取路由参数中的 id
    let id = req.params.id

    // 找出数组中id一致的数据
    let signer = singers.find((item) => item.id === Number(id))

    if (!signer) {
        resp.end(`<h1>404 Not Found</h1>`)
        return;
    }

    resp.end(`<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h1>${signer.singer_name}</h1>
            <img src=${signer.singer_pic}></img>
        </body>
    </html>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})