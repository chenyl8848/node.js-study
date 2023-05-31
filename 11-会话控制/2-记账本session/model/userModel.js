const mongoose = require("mongoose");

// 创建文档结构
let userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

// 创建文档模型
let userModel = mongoose.model('user', userSchema)

module.exports = userModel