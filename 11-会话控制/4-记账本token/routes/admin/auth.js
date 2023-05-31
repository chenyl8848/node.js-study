var express = require('express');
const accountModel = require('../../model/accountModel');
const userModel = require('../../model/userModel');
const md5 = require('md5')

var router = express.Router();

/**
 * 页面跳转
 */
// 登录页面
router.get('/toRegister', function (req, resp, next) {
    resp.render('./auth/register')
})

router.get('/toLogin', function (req, resp, next) {
    resp.render('./auth/login')
})


/**
 * 后端接口
 */
router.post('/register', function (req, resp, next) {
    // 表单验证
    userModel.create({...req.body, password: md5(req.body.password)}, (error, data) => {
        if (error) {
            console.log('注册用户失败', error)
            resp.status(500).send('注册用户失败')
            return
        }
        resp.render('success', {message: '注册成功', redirectUrl: 'toLogin'})
    })
})

router.post('/login', function (req, resp, next) {
    console.log(req.body)
    let {username, password} = req.body
    userModel.findOne({username: username, password: md5(password)}, (error, data) => {
        if (error) {
            console.log('登录失败', error)
            resp.status(500).send('登陆失败')
            return
        }

        if (!data) {
            return resp.send('用户不存在或密码错误')
        }

        // 写入 session
        req.session.username = data.username
        req.session._id = data._id
    
        resp.render('success', {message: '登录成功', redirectUrl: '/'})
    })
})

// 退出登录
router.post('/logout', function(req, resp, next) {
    req.session.destroy(() => {
        resp.render('success', {message: '退出登录成功', redirectUrl: '/toLogin'})
    })
})

module.exports = router;