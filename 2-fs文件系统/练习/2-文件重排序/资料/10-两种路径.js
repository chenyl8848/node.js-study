// 1.引入 fs 模块
const fs = require('fs')

// 相对路径
// fs.writeFileSync('./index.html', 'love')
// fs.writeFileSync('index.html', 'love')
// fs.writeFileSync('../index.html', 'love')

// 绝对路径
// fs.writeFileSync('E:/index.html', 'love')

//Error: EPERM: operation not permitted, open 'C:/index.html' C 盘没有权限
fs.writeFileSync('C:/index.html', 'love')
// 从根路径下
// fs.writeFileSync('/index.html', 'love') 
