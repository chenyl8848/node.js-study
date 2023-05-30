// 1.导入 mongoose
const mongoose = require('mongoose')

// 设置 strictQuery 为 true
mongoose.set('strictQuery', true)

// 2.连接 mongodb 服务
mongoose.connect('mongodb://127.0.0.1:27017/test')

// 3.设置连接成功的回调函数
mongoose.connection.once('open', () => {
    // 创建新文档

    // 1、创建文档的结构模型
    let bookSchema = new mongoose.Schema({
        name: String,
        author: String,
        price: Number
    });

    // 2、创建文档模型对象，用于操作文档
    // book 就是集合名，mongoose 会默认加上 s,在mongodb数据库中显示的是 books
    let bookModel = mongoose.model('book', bookSchema);

    // 3、操作文档-新增
    // bookModel.create({
    //     name: "海边的卡夫卡",
    //     author: '树上春树',
    //     price: 49
    // }, (err, data) => {
    //     // 判断是否有错误
    //     if (err) {
    //         console.log('文档新增失败', err)
    //         return;
    //     }
    //     console.log('文档新增成功', data)
    // });

    // 批量新增
    bookModel.insertMany([{
            name: '西游记',
            author: '吴承恩',
            price: 19.9,
        }, {
            name: '红楼梦',
            author: '曹雪芹',
            price: 29.9,
        }, {
            name: '三国演义',
            author: '罗贯中',
            price: 25.9,
        }, {
            name: '水浒传',
            author: '施耐庵',
            price: 20.9,
        }, {
            name: '活着',
            author: '余华',
            price: 19.9,
        }, {
            name: '狂飙',
            author: '徐纪周',
            price: 68,
        }, {
            name: '大魏能臣',
            author: '黑男爵',
            price: 9.9,
        },
        {
            name: '知北游',
            author: '洛水',
            price: 59,
        }, {
            name: '道君',
            author: '跃千愁',
            price: 59,
        }, {
            name: '七煞碑',
            author: '游泳的猫',
            price: 29,
        }, {
            name: '独游',
            author: '酒精过敏',
            price: 15,
        }, {
            name: '大泼猴',
            author: '甲鱼不是龟',
            price: 26,
        },
        {
            name: '黑暗王者',
            author: '古羲',
            price: 39,
        },
        {
            name: '不二大道',
            author: '文刀手予',
            price: 89,
        },
        {
            name: '大泼猴',
            author: '甲鱼不是龟',
            price: 59,
        },
        {
            name: '长安的荔枝',
            author: '马伯庸',
            price: 45,
        },
        {
            name: '命运',
            author: '蔡崇达',
            price: 59.8,
        },
        {
            name: '如雪如山',
            author: '张天翼',
            price: 58,
        },
        {
            name: '三体',
            author: '刘慈欣',
            price: 23,
        },
        {
            name: '秋园',
            author: '杨本芬',
            price: 38,
        },
        {
            name: '百年孤独',
            author: '范晔',
            price: 39.5,
        },
        {
            name: '在细雨中呼喊',
            author: '余华',
            price: 25,
        },
    ], (error, data) => {
        if (error) {
            console.log('批量新增失败', error)
            return
        }
        console.log('批量新增成功')
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