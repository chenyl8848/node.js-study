// 1.引入 mongoose 
const mongoose = require('mongoose')

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 3.设置连接成功的回调
mongoose.connection.once('open', () => {

    // 1、创建文档结构
    let bookSchema = mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })

    // 2、创建文档模型
    let bookModel = mongoose.model('book', bookSchema)

    // 3、操作文档-更新
    // 单个更新。有多个的话，也会更新一个，且不会报错
    // bookModel.updateOne({
    //     name: '海边的卡夫卡'
    // }, {
    //     name: '西游记',
    //     author: '吴承恩',
    //     price: 59
    // }, (error, data) => {
    //     if (error) {
    //         console.log('更新文档失败', error)
    //         return;
    //     }

    //     console.log('更新文档成功', data)
    // })

    // 批量更新
    bookModel.updateMany({
        name: '海边的卡夫卡'
    }, {
        price: 89
    }, (error, data) => {
        if (error) {
            console.log('批量更新文档失败', error)
            return
        } 
        console.log('批量更新文档成功', data)
    })

    console.log('连接成功')
})

// 4.设置连接失败的回调
mongoose.connection.once('error', () => {
    console.log('连接失败')
})

// 5.设置连接关闭的回调
mongoose.connection.once('error', () => {
    console.log('连接关闭')
})