/**
 * 需求：
 *  GET   /login  显示表单网页
 *  POST  /login  获取表单中的『用户名』和『密码』
 */

// 导入模块
const express = require('express')

// 使用 body-parser 获取请求体数据
// 安装 body-parser
// npm i body-parser
// 导入
const bodyParser = require('body-parser')

// 创建应用服务
const app = express()

// 解析 json 请求格式的请求体中间件
const jsonParser = bodyParser.json()

// 解析 queryString 请求格式的请求体中间件
const urlencodedParser = bodyParser.urlencoded({extended: false})

// 创建路由
app.get('/login', (req, resp) => {
    resp.sendFile(__dirname + '/11-form.html')
})

app.post('/login', urlencodedParser, (req, resp) => {

    // 获取用户名和密码
    console.log(req.body)
    resp.send('登录成功')
})

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口，启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})