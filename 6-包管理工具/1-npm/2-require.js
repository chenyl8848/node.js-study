// 1.导入 uniq 包
// 第三方包导入时不用写路径
// const uniq = require('uniq')

// 用相对路径导入也是可以
// const uniq = require('./node_modules/uniq')
// const uniq = require('./node_modules/uniq/uniq')


// 2.使用函数
let arr = [1, 2, 3, 4, 5, 5, 4, 3, 2, 1]
const result = uniq(arr)
// [ 1, 2, 3, 4, 5 ]
console.log(result)