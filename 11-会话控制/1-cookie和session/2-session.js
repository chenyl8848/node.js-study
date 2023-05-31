// 引入模块
const express = require('express')
const session = require('express-session')
const MongoStore = require('connect-mongo')

// 创建应用服务
const app = express()
// 设置 session 的中间件
app.use(session({
    // 设置 cookie 的 name，默认值是：connect.sid
    name: 'sid', 
    // 参与加密的字符串（又称签名）  加盐
    secret: '123456',
    // 是否为每次请求都设置一个cookie用来存储session的id
    saveUninitialized: false,
    // 是否在每次请求时重新保存session  20 分钟    4:00  4:20
    resave: true,
    store: MongoStore.create({
        //数据库的连接配置
        mongoUrl: 'mongodb://127.0.0.1:27017/test'
    }),
    cookie: {
        // 开启后前端无法通过 JS 操作
        httpOnly: true,
        // 这一条 是控制 sessionID 的过期时间的！！！ 5分钟过期
        maxAge: 5 * 60 * 1000
    }
}))

// 创建路由
app.get('/', (req, resp) => {
    resp.send('home')
})

// 登录时设置 session
app.get('/login', (req, resp) => {
    // 校验一下用户名密码是否正确
    if (req.query.username === 'admin' && req.query.password === 'admin') {
        // 设置 session 信息
        req.session.username = req.query.username
        req.session.uid = '258aefccc'
        resp.send('登录成功')
    } else {
        resp.send('登录失败')
    }
})

// 获取 session
app.get('/cart', (req, resp) => {
    // 检测 session 是否存在用户信息
    if (req.session.username) {
        resp.send(`欢迎您${req.session.username}`)
    } else {
        resp.send('请先登录')
    }
})

// 退出登录删除 session
app.get('/logout', (req, resp) => {
    req.session.destroy(() => {
        resp.send('成功退出登录')
    })
})

// 监听端口，启动服务
app.listen(3000)
