var express = require('express');
var router = express.Router();

// 导入 lowdb
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

const adapter = new FileSync('noteBooks.json')
const db = low(adapter)

// 导入 shortid
const shortid = require('shortid')


/**
 * 页面跳转
 */
// 首页
router.get('/', function (req, resp, next) {
  let result = db.get('notes').value()
  console.log(result)
  resp.render('index', {
    notes: result
  });
});

// 记账页面
router.get('/toCreate', function (req, resp, next) {
  resp.render('create')
})

/**
 * 后端接口
 */
// 记账
router.post('/create', function (req, resp, next) {
  db.get('notes').unshift({
    id: shortid.generate(),
    ...req.body
  }).write()
  resp.render('success', {
    message: '添加成功',
    redirectUrl: '/'
  })
})

// 删除
router.get('/delete/:id', function (req, resp, next) {
  db.get('notes').remove({
    id: req.params.id
  }).write()
  resp.render('success', {
    message: '删除成功',
    redirectUrl: '/'
  })
})

module.exports = router;