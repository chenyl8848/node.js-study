/**
 * require 导入原理 伪代码
 */

// 1.引入模块
const path = require('path')
const fs = require('fs')

// 2.定义一个缓存数组
let caches = []

function require(file) {
    // 3.将相对路径转成绝对路径
    let absolutePath = path.resolve(__dirname, file)
    
    // 4.检测是否有缓存
    if (caches[absolutePath]) {
        return caches[absolutePath]
    }

    // 5.读取文件的代码
    let code = fs.readFileSync(absolutePath).toString()
    // 6.封装一个函数
    let module = {}
    let exports = module.exports = {}

    (function (exports, require, module, __fileName, __dirname) {
        const test = {
            name: 'hello world'
        }
        module.exports = test

        console.log(arguments.callee.toString())
    })(exports, require, module, __filename, __dirname)

    // 7.缓存结果
    caches[absolutePath] = module.exports

    // 7.返回 module.exports 的值
    return module.exports
}