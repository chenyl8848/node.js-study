// 1.安装 lowdb
// npm i lowdb@5.1.0

// 2.导入模块
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('db.json')
const db = low(adapter)

// 初始化数据
// db.defaults({posts: [], user: {}}).write()

// 写入数据
// 写在数组的最后面
// db.get('posts')
//     .push({
//         id: 1,
//         title: 'lowdb is awesome'
//     })
//     .write()

// 从数据前面添加
// db.get('posts').unshift({
//     id: 2,
//     title: '张三'
// }).write()

// 读取数据
// let result = db.get('posts').value()
// let result = db.get('posts').find({id: 1}).value()
// console.log(result)

// 更新数据
// db.get('posts').find({id: 1}).assign({title: 'lowdb 是一个很好的数据库'}).write()

// 删除数据
db.get('posts').remove({id: 2}).write()