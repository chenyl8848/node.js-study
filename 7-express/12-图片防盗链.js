// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建防盗链中间件

// http://127.0.0.1:5500/7-express/12-form.html 访问的时候能获取到 图片
// http://localhost:5500/7-express/12-form.html 访问的时候不能获取到 图片
app.use((req, resp, next) => {
    // 检测请求头中的 referer 是否为 127.0.0.1
    // 获取请求头的 referer
    let referer = req.get('referer');
    if (referer) {
        let url = new URL(referer)
        // 获取主机地址
        let hostname = url.hostname

        if (hostname !== '127.0.0.1') {
            // 响应
            resp.status(404).send(`<h1>404 Not Found</h1>`)
            return
        }
    }

    next()
});

// 创建路由
app.get('/', (req, resp) => {
    resp.sendFile(__dirname + '/12-form.html')
})

// 使用静态资源中间件
app.use(express.static(__dirname + '/public'))


app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})