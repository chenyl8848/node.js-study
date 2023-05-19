// buffer 与字符串的转换
// const buffer = Buffer.from([105, 108, 111, 118, 101, 121, 111, 117]);
// 默认使用 UTF-8 的编码格式 
// console.log(buffer.toString())

// const buffer = Buffer.from('hello');
// 二进制：1101000
// console.log(buffer[0].toString(2))

// 修改 buffer
// buffer[0] = 95
// console.log(buffer.toString())

// 溢出 如果修改的数值超过 255 ，则超过 8 位数据会被舍弃
// const buffer = Buffer.from('hello')
// 会舍弃高位的数字，因为八位的二进制最高值为 255   0001 0110 1001  => 0110 1001
// buffer[0] = 361
// console.log(buffer)

// 中文 一个 utf-8 的字符 一般 占 3 个字节
const buffer = Buffer.from('你好')
console.log(buffer)