// 导入模块
const express = require('express')
const path = require('path')

// 创建应用服务
const app = express()
// 设置模板引擎为 ejs
app.set('view engine', 'ejs')
// 设置模板文件存放位置   模板文件: 具有模板语法内容的文件
app.set('views', path.resolve(__dirname, './views'))

// 创建路由
app.get('/home', (req, resp) => {
    // resp.send('home')

    // 渲染模板
    // 要渲染的数据
    let text = '寇可往,我亦可往\r\n犯强汉者,虽远必诛'
    resp.render('home', { text })

})

app.all('*', (req, resp) => {
    resp.send(`<h1>404 Not Found</h1>`)
})

// 监听端口,启动服务
app.listen(9000, () => {
    console.log('服务启动成功')
})