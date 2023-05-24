/**
 * 需求：
 *  针对 /admin  /setting 的请求, 要求 URL 携带 code=521 参数, 如未携带提示『暗号错误』
 */
// 引入模块
const express = require('express')

// 创建应用服务
const app = express()

// 创建路由中间件
let routerMiddleware = (req, resp, next) => {
    // 获取 code
    let { code } = req.query

    if (code !== '521') {
        resp.send('暗号错误')
        return;
    }
    next()
}

// 创建路由
app.get('/home', (req, resp) => {
    resp.send('前台首页')
})

app.get('/admin', routerMiddleware, (req, resp) => {
    resp.send('后台首页')
})

app.get('/setting', routerMiddleware, (req, resp) => {
    resp.send('个人设置')
})

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})