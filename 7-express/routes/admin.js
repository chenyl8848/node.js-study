// 导入模块
const express = require('express')

// 创建应用服务
const router = express()

// 创建路由
router.get('/admin', (req, resp) => {
    resp.send('后台首页')
})

router.get('/setting', (req, resp) => {
    resp.send('个人设置')
})

module.exports = router

