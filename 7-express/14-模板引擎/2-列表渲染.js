// 导入模块
const ejs = require('ejs')
const fs = require('fs')

// 定义数据
const sanguo = ['关羽', '张飞', '赵云', '黄忠', '马超']

// 获取模板字符串
const str = fs.readFileSync(__dirname + '/2-三国.html').toString()

// 渲染字符串
let result = ejs.render(str, {list: sanguo})
console.log(result)