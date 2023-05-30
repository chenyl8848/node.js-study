// 1.导入 mongoose
const mongoose = require('mongoose')

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 设置 strictQuery 为 true
mongoose.set('strictQuery', true)

// 3.设置连接成功的回调函数
mongoose.connection.once('open', () => {
    // 1、创建文档结构
    let bookSchema = new mongoose.Schema({
        name: {
            type: String,
            // 设置是否必填
            // name: ValidatorError: Path `name` is required.
            required: true,
            // 是否唯一
            unique: true
        },
        author: {
            type: String,
            // 设置默认值
            default: '匿名'
        },
        price: Number,
        tages: {
            type: String,
            // 枚举
            // tages: ValidatorError: `架空` is not a valid enum value for path `tages`.
            enum: ['言情', '历史', '励志']
        }
    })

    // 2、创建文档模型
    let bookModel = mongoose.model('book', bookSchema)

    // 3、操作文档-新增
    bookModel.create({
        // name: '西游记',
        price: 199,
        tages: '架空'
    }, (error, data) => {
        if (error) {
            console.log('文档新增失败', error)
            return
        }
        console.log('文档新增成功', data)
    })
    
    console.log('连接成功')
})

// 4.设置连接失败的回调函数
mongoose.connection.on('open', () => {
    console.log('连接失败')
})

// 5.设置连接关闭的回调函数
mongoose.connection.on('open', () => {
    console.log('连接关闭')
})