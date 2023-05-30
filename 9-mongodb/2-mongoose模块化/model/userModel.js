const mongoose = require("mongoose")

let userSchema = mongoose.Schema({
    userName: String,
    nickName: String,
    age: Number,
    email: String
})

let userModel = mongoose.model('user', userSchema);

module.exports = userModel