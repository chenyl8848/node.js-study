const test = {
    name: '你好，世界'
}

function helloWorld () {
    console.log('hello world...')
}

module.exports = test

// 将当前 js 文件转成 字符串
console.log(arguments.callee.toString())
console.log(test)