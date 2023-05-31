/**
 * 校验是否登录中间件
 */
function checkLoginMiddleware(req, resp, next) {
    if (!req.session.username) {
        resp.redirect('/toLogin')
        return
    }
    next()
}

module.exports = checkLoginMiddleware