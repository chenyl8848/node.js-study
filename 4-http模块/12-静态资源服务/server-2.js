/**
 * 需求：
 *  创建一个 HTTP 服务，端口为 9000，满足如下需求
 *      GET  /index.html        响应  page/index.html 的文件内容
 *      GET  /css/app.css       响应  page/css/app.css 的文件内容
 *      GET  /images/logo.png   响应  page/images/logo.png 的文件内容
 *  根据不同的文件类型，返回不同的类型
 */

// 1.引入模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 声明一个变量
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

// 2.创建服务
const server = http.createServer((request, response) => {

    // 获取文件根路径
    let root = path.resolve(__dirname + '/page')
    // 获取文件路径
    let {
        pathname
    } = new URL(request.url, 'https://127.0.0.1:9000')
    // 拼接文件路径
    let filePath = root + pathname

    // 获取文件
    fs.readFile(filePath, (error, data) => {

        if (error) {
            // 设置字符集，解决打开文件中文乱码的问题
            response.setHeader('content-type', 'text/html;charset=utf-8')
            switch(error.code) {
                case 'ENOENT': 
                    response.statusCode = 404
                    response.end(`<h1>404 Not Found</h1>`)
                    break;
                case 'EPERM':
                    response.statusCode = 403
                    response.end(`<h1>403 Forbidden</h1>`)
                    break;
                default: 
                    response.statusCode = 500
                    response.end(`<h1>500 Internal </h1>`)
                    break;
            }
            return;
        }

        // 获取文件后缀
        let ext = path.extname(filePath).slice(1)
        // 获取对应的类型
        let type = mimes[ext]
        if (type) {
            // 匹配到了
            if (ext === 'html') {
                response.setHeader('content-type', type + ';charset=utf-8')
            } else {
                response.setHeader('content-type', type)
            }
        } else {
            // 没有匹配到
            // 这种返回格式可以实现下载效果
            response.setHeader('content-type', 'application/octet-stream')
        }

        response.end(data)
    })
})

// 3.启动服务并监听端口
server.listen(9000, () => {
    console.log('服务启动成功')
})