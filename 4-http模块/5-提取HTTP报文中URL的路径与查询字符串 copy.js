// 1.引入 http 模块
const http = require('http')

// 1.导入 url 模块
const url = require('url')

// 2.创建服务
const server = http.createServer((request, response) => {
    // request: http://127.0.0.1:9000/search?keyword=123&username=chen

    // 2.解析 request.url
    // let res1 = url.parse(request.url)
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?keyword=123&username=chen',
    //     query: 'keyword=123&username=chen',
    //     pathname: '/search',
    //     path: '/search?keyword=123&username=chen',
    //     href: '/search?keyword=123&username=chen'
    // }
    // console.log(res1)


    // let res2 = url.parse(request.url, true)
    // Url {
    //     protocol: null,
    //     slashes: null,
    //     auth: null,
    //     host: null,
    //     port: null,
    //     hostname: null,
    //     hash: null,
    //     search: '?keyword=123&username=chen',
    //     query: [Object: null prototype] {
    //         keyword: '123',
    //         username: 'chen'
    //     },
    //     pathname: '/search',
    //     path: '/search?keyword=123&username=chen',
    //     href: '/search?keyword=123&username=chen'
    // }
    // console.log(res2)

    let res = url.parse(request.url, true)
    // 请求路径
    // /search
    console.log(res.pathname)
    // 查询字符串
    // 123
    console.log(res.query.keyword)

    response.end('hello world')
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})