const db = require("./db/db");
const bookModel = require("./model/bookModel");

db(()=> {
    bookModel.find((error, data) => {
        if (error) {
            console.log('文档读取错误', error)
            return
        }
        console.log(data)
    })
}, () => {
    console.log('连接失败啦啦')
})
// db(()=> {
//     bookModel.find((error, data) => {
//         if (error) {
//             console.log('文档读取错误', error)
//             return
//         }
//         console.log(data)
//     })
// })