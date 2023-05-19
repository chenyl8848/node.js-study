/**
 * 需求：
 *  写一个官书有感
 */

// 1.导入 fs 模块
const fs = require('fs');

// 2.创建写入流对象
const writeStream = fs.createWriteStream('./观书有感.txt');

// 3.写入内容
writeStream.write('半亩方塘一鉴开\r\n')
writeStream.write('天光云影共徘徊\r\n')
writeStream.write('问渠那得清如许\r\n')
writeStream.write('为有源头活水来\r\n')

// 4.关闭通道 不是必须
// writeStream.close();