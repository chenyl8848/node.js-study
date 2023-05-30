const mongoose = require("mongoose")

// 1.创建文档结构
let bookSchema = mongoose.Schema({
    name: String,
    author: String,
    price: Number
})

let bookModel = mongoose.model('book', bookSchema)

module.exports = bookModel