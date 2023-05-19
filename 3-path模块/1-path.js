// 1.引入 path、fs 模块
const path = require('path')
const fs = require('fs')

// 写入文件
// fs.writeFileSync(__dirname + '/index.html', 'love')
// E:\JavaEE\frontend\nodejs-study\3-path模块/index.html
// console.log(__dirname + '/index.html')

// 使用 path 解决
// E:\JavaEE\frontend\nodejs-study\3-path模块\index.html
console.log(path.resolve(__dirname, './index.html'))
// E:\JavaEE\frontend\nodejs-study\3-path模块\index.html
console.log(path.resolve(__dirname, 'index.html'))
// E:\index.html\test
console.log(path.resolve(__dirname, '/index.html', './test'))

// 分隔符
// \ windows:\ linux:/
console.log(path.sep)

// parse 方法 __dirname '全局变量'
// __filename '全局变量' 文件的绝对路径
console.log(__filename)

let str = 'E:\\JavaEE\\frontend\\nodejs-study\\3-path模块\\index.html';

// {
//     root: 'E:\\',
//     dir: 'E:\\JavaEE\\frontend\\nodejs-study\\3-path模块',
//     base: 'index.html',
//     ext: '.html',
//     name: 'index'
// }
console.log(path.parse(str))

// index.html
console.log(path.basename(str))

// E:\JavaEE\frontend\nodejs-study\3-path模块
console.log(path.dirname(str))

// .html
console.log(path.extname(str))