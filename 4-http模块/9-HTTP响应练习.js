/**
 * 需求：
 *  返回一个4行3列的表格，且要求表格有隔行换色效果，且点击单元格能高亮显示
 */


// 1.引入 http 模块
const http = require('http')

// 2.创建服务
const server = http.createServer((request, response) => {

    response.end(`
    <!DOCTYPE html>
        <html lang="en">

        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            <style>
                td {
                    padding: 20px 40px;
                }

                table tr:nth-child(odd) {
                    background: rgb(179, 165, 201);
                }

                table tr:nth-child(even) {
                    background: #fcb;
                }

                table,
                td {
                    border-collapse: collapse;
                }
            </style>
        </head>

        <body>
            <table border="1">
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <script>
                //获取所有的 td
                let tds = document.querySelectorAll('td');
                //遍历
                tds.forEach(item => {
                    item.onclick = function () {
                        this.style.background = '#222';
                    }
                })
            </script>
        </body>

        </html>
    `)

})

// 3.启动服务并监听端口‘
server.listen(9000, () => {
    console.log('服务启动成功')
})