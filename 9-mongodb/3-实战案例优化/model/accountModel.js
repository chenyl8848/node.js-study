const mongoose = require("mongoose")

// 1.创建文档结构
let accountSchema = mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    happenTime: Date,
    type: {
        type: String,
        default: "-1"
    },
    amount: {
        type: Number,
        required: true
    },
    remark: String
})

let accountModel = mongoose.model('account', accountSchema)

module.exports = accountModel