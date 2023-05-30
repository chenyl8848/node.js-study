// 1.安装 mongoose
// npm i mongoose

// 2.导入 mongoose
const mongoose = require('mongoose')

// 设置 strictQuery 为 true
mongoose.set('strictQuery', true)

// 3.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 4.设置回调
// mongoose.connection.on('open', () => {
//     console.log('连接成功')
// })

// once 事件回调函数只调用一次
mongoose.connection.once('open', () => {
    console.log('连接成功')
})

// 5.设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接关闭')
})

// 关闭 mongodb 的连接
// setTimeout(() => {
//     mongoose.disconnect();
// }, 5000);