const type = 'hello world'

function helloWorld() {
    console.log('你好，世界....')
}

// 暴露数据、方法
module.exports = {
    type,
    helloWorld
}

// exports.type = type
// module.exports = helloWorld

// exports.type = type
// exports.helloWorld = helloWorld