// 1.导入 mongoose 
const mongoose = require('mongoose')

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 设置 strictQuery 为 true
mongoose.set('strictQuery', true)

// 3.设置连接成功的回调
mongoose.connection.once('open', () => {
    // 1、创建文档结构
    let bookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    })
    
    // 2、创建文档模型
    let bookModel = mongoose.model('book', bookSchema)

    // 3、操作文档-删除
    // 删除一条记录，尽管数据库中有多条记录，会删除一条，也不会报错
    // bookModel.deleteOne({name: '西游记'}, (error, data) => {
    //     if (error) {
    //         console.log('删除文档失败', data)
    //         return
    //     }
    //     console.log('删除文档成功', data)
    // })

    // 批量删除
    bookModel.deleteMany({
        name: '海边的卡夫卡'
    }, (error, data) => {
        if (error) {
            console.log('批量删除失败', error)
            return
        }
        console.log('批量删除成功', data)
    })

    console.log('连接成功')
})

// 4.设置连接错误的回调
mongoose.connection.on('error', () => {
    console.log('连接失败')
})

// 5.设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭')
})