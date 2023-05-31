// 引入 jwt
const jwt = require('jsonwebtoken')

// 生成 token
// jwt.sign(用户数据，加密字符串，配置对象)
let token = jwt.sign({
    username: 'admin'
}, '123456', {
    // 单位秒 60秒后过期
    expiresIn: 60
})

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNjg1NTE5NTkzLCJleHAiOjE2ODU1MTk2NTN9.IP90SEMbkzaBGnxVDoq63IHWzQ8crbfapvYCylGZhhg
console.log(token)

// 校验 token
jwt.verify(token, '123456', (error, data) => {
    if (error) {
        console.log('token 校验失败', error)
        return
    }
    console.log(data)
})