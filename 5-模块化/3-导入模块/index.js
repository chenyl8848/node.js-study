// 1.导入模块
// const hello = require('./hello.js')
// js 可以省略后缀
const hello = require('./hello')

// 导入 json 文件
// const duanzi = require('./duanzi.json')
// json 可以省略后缀
// const duanzi = require('./duanzi')

// 当 json 文件名与 js 文件名一致时，且没有指定文件后缀，优先导入 js
const duanzi = require('./duanzi')

// 导入其他类型的文件
const test = require('./test')

// 2.使用数据
hello.helloWorld()
console.log(duanzi)