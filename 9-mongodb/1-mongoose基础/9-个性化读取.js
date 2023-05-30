// 1.引入 mongoose
const mongoose = require('mongoose')

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

mongoose.set('strictQuery', true)

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

    // 3.操作文档模型

    // 只查询 书名 作者
    // 1:查询 0:不查询
    // bookModel.find().select({name: 1, author: 1, _id: 0}).exec((error, data) => {
    //     if (error) {
    //         console.log('文档读取错误', error)
    //         return
    //     }
    //     console.log('文档读取成功', data)
    // })

    // 对数据进行排序
    // 1:升序 -1:降序
    // bookModel.find({author: '余华'}).select({name: 1, price: 1}).sort({price: -1}).exec((error, data) => {
    //     if (error) {
    //         console.log('文件读取错误', error)
    //         return
    //     }
    //     console.log(data)
    // })

    // 数据列表集合截取
    // 可用于分页
    bookModel.find()
        .select({name: 1, author: 1, _id: 0})
        .sort({price: -1})
        .skip(2)
        .limit(3)
        .exec((error, data) => {
            if (error) {
                console.log('文件读取错误', error)
                return
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