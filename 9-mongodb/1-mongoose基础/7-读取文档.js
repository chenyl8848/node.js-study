// 1.引入 mongoose 模块
const mongoose = require('mongoose')

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 设置 strictQuery 为 true
mongoose.set('strictQuery', true)

// 3.设置连接成功的回调函数
mongoose.connection.once('open', () => {
    // 1、创建文档结构
    let bookSchema = mongoose.Schema({
        name: String,
        author: String,
        price: Number,
        isHot: Boolean
    })

    // 2、创建文档模型
    let bookModel = mongoose.model('book', bookSchema);

    // 3、操作文档-读取
    // 批量获取
    // bookModel.find({name: '西游记'}, (error, data) => {
    //     if (error) {
    //         console.log('文档读取错误', error)
    //         return;
    //     }
    //     console.log('文档读取成功', data)
    // })

    // 读取一条记录
    // bookModel.findOne({name: '西游记'}, (error, data) => {
    //     if (error) {
    //         console.log('读取单个文档错误', error)
    //         return
    //     }
    //     console.log('读取单个文档成功', data)
    // })

    // 根据 id 查询记录 
    // 使用 id 查询不行 【根据id查询错误 CastError: Cast to ObjectId failed for value "{ id: '6475714538eb4fb02aec1e32' }" (type Object) at path "_id" for model "book"】
    // 要用 _id 查询
    // bookModel.findById({id: '6475714538eb4fb02aec1e32'}, (error, data) => {
    //     if (error) {
    //         console.log('根据id查询错误', error)
    //         return;
    //     }
    //     console.log('根据id查询成功', data)
    // })

    // 获取所有
    bookModel.find((error, data) => {
        if (error) {
            console.log('获取所有错误', error)
            return;
        }
        console.log(data)
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