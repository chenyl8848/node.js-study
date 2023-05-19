// console.log(window) // ReferenceError: window is not defined
// console.log(document) // ReferenceError: document is not defined
// console.log(navigator) // ReferenceError: navigator is not defined
// console.log(location) // ReferenceError: location is not defined
// console.log(history) // ReferenceError: history is not defined

// node.js 中全局最高对象 global/globalThis
console.log(global)
console.log(globalThis)
console.log(global === globalThis) // true

// node.js 中还可以使用 console()、setTimeout()、setInterval() 方法
setTimeout(() => {
    console.log("hello node.js")
}, 2000)

setInterval(() => {
    console.log("hello node.js")
}, 3000)