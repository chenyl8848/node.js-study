const {DBHOST, DBPORT, DBNAME} = require('../config/dbconfig')
// 暴露服务
module.exports = function (success, error) {
    // 判断 error 为其默认值
    if (typeof error !== 'function') {
        error = () => {
            console.log('连接失败')
        }
    }

    // 1.引入 mongoose 模块
    const mongoose = require('mongoose')

    mongoose.set('strictQuery', true)

    // 2.连接 mongodb 服务
    mongoose.connect(`mongodb://${DBHOST}:${DBPORT}/${DBNAME}`)

    // 3.设置连接成功的回调
    mongoose.connection.once('open', () => {
        success()
    })

    // 4.设置连接失败的回调
    mongoose.connection.on('error', () => {
        error()
    })

    // 5.设置连接关闭的回调
    mongoose.connection.on('close', () => {
        console.log('连接关闭')
    })

}