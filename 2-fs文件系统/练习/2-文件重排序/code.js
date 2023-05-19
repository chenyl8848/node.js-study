/**
 * 需求：
 *  对资料中的文件名进行改名，数字 < 10的文件，前面加上 0
 */

// 1.引入 fs 模块
const fs = require('fs')

// 2.读取文件夹里面的文件信息
const files = fs.readdirSync('./资料')

// 3.对文件信息进行遍历
files.forEach((item, index) => {
    console.log(item, index)
    
    // 拆分文件名
    let data = item.split('-');
    let [num, name] = data;
    
    index++;
    index = index < 10 ? '0' + index : index

    // 创建新的文件名
    let newFileName = index + '-' + name;

    // 文件重命名
    fs.renameSync(`./资料/${item}`, `./资料/${newFileName}`)
})