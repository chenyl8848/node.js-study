// 导入express
const express = require('express')
const cookieParser = require('cookie-parser')

// 创建应用对象
const app = express()
app.use(cookieParser())

// 创建路由
app.get('/', (req, resp) => {
    resp.send('home')
})

// 设置cookie
app.get('/set-cookie', (req, resp) => {
    // 在浏览器关闭时会销毁
    // resp.cookie('name', 'zhangsan')

    // 设置 cookie 的过期时间。设置一分钟以后过期
    resp.cookie('name', 'lisi', {maxAge: 60 * 1000})

    resp.send('hello world')
})

// 获取 cookie 
app.get('/get-cookie', (req, resp) => {
    console.log(req.cookies)
    resp.send(`欢迎您${req.cookies.name}`)
})

// 删除 cookie
app.get('/remove-cookie', (req, resp) => {
    resp.clearCookie('name')
    resp.send('删除cookie成功')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务启动成功')
})