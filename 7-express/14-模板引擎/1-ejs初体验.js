// 安装 ejs
// npm i ejs
// 导入模块
const ejs = require('ejs')
const fs = require('fs')

// 声明变量
let text = '中国'
let weather = '艳阳高照，万里无云'
let str = fs.readFileSync(__dirname + '/1-html.html').toString()

let result = ejs.render(str, {text, weather})
console.log(result)
