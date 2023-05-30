// 1.引入 mongoose
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
        price: Number,
        isHot: Boolean,
        tages: Array,
        publishTime: Date,
        test: mongoose.Schema.Types.Mixed // 文档 ID
    });

    // 2、创建文档模型
    let bookModel = mongoose.model('book', bookSchema)

    // 3.操作文档-新增
    bookModel.create({
        name: '西游记',
        author: '吴承恩',
        price: 19,
        isHot: true,
        tages: ['玄幻', '鬼怪', '逆天'],
        publishTime: new Date(),
        test: new Date()
    }, (err, data) => {
        if (err) {
            console.log('文档新增失败', err)
            return
        }
        console.log('文档新增成功', data)
    })

    console.log('连接成功')
}) 

// 4.设置连接失败的回调
mongoose.connection.on('error', () => {
    console.log('连接失败')
})

// 5.设置连接关闭的回调
mongoose.connection.on('close', () => {
    console.log('连接关闭')
})