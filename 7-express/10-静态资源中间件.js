// 导入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由
app.get('/', (req, resp) => {
    resp.send('前台首页')
})

// 静态资源中间件设置
// '/' 路径默认访问 idnex.html，如果与动态资源的请求路径一致时，谁先加载就谁先返回
app.use(express.static(__dirname + '/public'))

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})