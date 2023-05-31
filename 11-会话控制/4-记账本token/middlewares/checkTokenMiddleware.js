/**
 * 校验 token 中间件
 */
const jwt = require('jsonwebtoken')
const { SECRECT } = require('../config/index')

function checkTokenMiddleware (req, resp, next) {
    // 从请求头中获取 token
    let token = req.get('token')
    if (!token) {
        resp.json({
            code: -1,
            message: 'token 缺失',
            data: null
        })
        return
    }

    jwt.verify(token, SECRECT, (error, data) => {
        if (error) {
            console.log('token 校验错误', error)
            resp.json({
                code: -1,
                message: 'token 校验错误',
                data: null
            })
            return
        }
        next()
    })

}

module.exports = checkTokenMiddleware