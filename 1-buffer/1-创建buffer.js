// 1.alloc 
// 创建了一个长度为 10 字节的 Buffer，相当于申请了 10 字节的内存空间，每个字节的值为 0
// const buffer = Buffer.alloc(10);
// console.log(buffer)

// 2.allocUnsafe
//创建了一个长度为 10 字节的 Buffer，buffer 中可能存在旧的数据, 可能会影响执行结果，所以叫 unsafe
// const buffer =  Buffer.allocUnsafe(1000)
// console.log(buffer)

// 3.from
//通过字符串创建 Buffer
// const buffer = Buffer.from('hello')
// console.log(buffer)
//通过数组创建 Buffer
const buffer = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117])
console.log(buffer.toString())

