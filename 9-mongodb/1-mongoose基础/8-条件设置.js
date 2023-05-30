// 1.引入 mongoose
const mongoose = require('mongoose')

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 3.设置连接成功的回调函数
mongoose.connection.once('open', () => {
    // 1、创建文档结构
    let bookSchema = mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    // 2、创建文档模型
    let bookModel = mongoose.model('book', bookSchema)

    // 3、操作文档-条件设置

    // 获取价格 小于 20 的图书
    // $lt 小于 $lte 小于等于 $gt 大于 $gte 大于等于
    // bookModel.find({price: {$lt: 20}}, (error, data) => {
    //     if (error) {
    //         console.log('文档读取错误', error)
    //         return;
    //     }
    //     console.log('文档读取成功', data)
    // })

    //价格大于等于 30 且小于 70
    // bookModel.find({
    //     $and: [
    //         {
    //             price: {
    //                 $gte: 30
    //             }
    //         }, {
    //             price: {
    //                 $lt: 70
    //             }
    //         }
    //     ]
    // }, (error, data) => {
    //     if (error) {
    //         console.log('文档读取错误', error)
    //         return;
    //     }
    //     console.log('文档读取成功', data)
    // })

    //曹雪芹 或者 余华的书
    // bookModel.find({
    //     $or: [
    //         {
    //             author: '曹雪芹'
    //         }, 
    //         {
    //             author: '余华'
    //         }
    //     ]
    // }, (error, data) => {
    //     if (error) {
    //         console.log('文档读取错误', error)
    //         return
    //     }
    //     console.log('文档读取成功', data)
    // })

    //正则表达式, 搜索书籍名称中带有 `三` 的图书
    let queryCondition = '三'
    // bookModel.find({name: /三/}, (error, data) => {
    //     if (error) {
    //         console.log('文档读取错误', error)
    //         return;
    //     }
    //     console.log('文档读取成功', data)
    // })

    bookModel.find({name: new RegExp(queryCondition)}, (error, data) => {
        if (error) {
            console.log('文档读取错误', error)
            return;
        }
        console.log('文档读取成功', data)
    })


    console.log('连接成功')
})

// 4.设置连接失败的回调函数
mongoose.connection.on('error', () => {
    console.log('连接失败')
})

// 5.设置连接关闭的回调函数
mongoose.connection.on('close', () => {
    console.log('连接关闭')
})