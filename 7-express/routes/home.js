// 导入模块
const express = require('express')

// 创建应用服务
const router = express()

// 创建路由
router.get('/', (req, resp) => {
    resp.send('前台首页')
})

router.get('/home', (req, resp) => {
    resp.send('home')
})

module.exports = router

