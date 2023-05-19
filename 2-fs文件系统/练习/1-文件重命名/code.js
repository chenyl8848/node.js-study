/**
 * 需求：
 *  对资料中的文件名进行改名，数字 < 10的文件，前面加上 0
 */

// 1.引入 fs 模块
const fs = require('fs')

// 2.读取文件夹里面的文件信息
const files = fs.readdirSync('./资料')

// 3.对文件信息进行遍历
files.forEach((item) => {
    // console.log(item)
    
    // 拆分文件名
    let data = item.split('-');
    let [num, name] = data;

    if (Number(num) < 10) {
        num = '0' + num
    }

    // 创建新的文件名
    let newFileName = num + '-' + name;

    // 文件重命名
    fs.renameSync(`./资料/${item}`, `./资料/${newFileName}`)
})