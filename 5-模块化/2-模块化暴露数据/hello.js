const type = 'hello world'

function helloWorld() {
    console.log('你好，世界....')
}

function sayHello(params) {
    console.log(`hello${params}`)
}

// 暴露数据、方法
// module.exports 可以暴露`任意`数据
// module.exports = {
//     type,
//     helloWorld,
//     sayHello
// }

// module.exports = helloWorld

// 不能使用 `exports = value`的形式暴露数据
// exports.type = type
exports.helloWorld = helloWorld

// 这么写是错误的
// exports = helloWorld
console.log(module.exports)
console.log(exports)
console.log(module.exports === exports)