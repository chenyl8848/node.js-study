/**
 * 需求：
 *  通过 isLogin 决定最终的输出内容
 *      true   输出『<span>欢迎回来</span>』
 *      false  输出『<button>登录</button>  <button>注册</button>』
 */

// 导入模块
const ejs = require('ejs')
const fs = require('fs')

// 声明变量
let isLogin = false

// 原生 js
// if (isLogin) {
//     console.log('<span>欢迎回来</span>')
// } else {
//     console.log('<button>登录</button>  <button>注册</button>')
// }

// 获取模板字符串
let str = fs.readFileSync(__dirname + '/3-登录.html').toString()

// 渲染模板
let result = ejs.render(str, {isLogin})
console.log(result)