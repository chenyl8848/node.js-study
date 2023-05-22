// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {
    // request: http://127.0.0.1:9000/search?keyword=123&username=chen

    // 第二个参数要写完整 http://127.0.0.1  只写 ip 会报错
    let url = new URL(request.url, 'http://127.0.0.1')

    // URL {
    //     href: 'http://127.0.0.1/search?keyword=123&username=chen',
    //     origin: 'http://127.0.0.1',
    //     protocol: 'http:',
    //     username: '',
    //     password: '',
    //     host: '127.0.0.1',
    //     hostname: '127.0.0.1',
    //     port: '',
    //     pathname: '/search',
    //     search: '?keyword=123&username=chen',
    //     searchParams: URLSearchParams {
    //         'keyword' => '123', 'username' => 'chen'
    //     },
    //     hash: ''
    // }
    // console.log(url)

    // 请求路径
    console.log(url.pathname)
    
    // 请求路径参数
    console.log(url.searchParams.get('keyword'))

    response.end('hello world')
})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})