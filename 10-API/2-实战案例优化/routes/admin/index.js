var express = require('express');
const accountModel = require('../../model/accountModel');

const moment = require('moment')
var router = express.Router();

/**
 * 页面跳转
 */
// 首页
router.get('/', function (req, resp, next) {

  accountModel.find().sort({
    happenTime: -1
  }).exec((error, data) => {
    if (error) {
      console.log('查询账单列表失败', error)
      resp.status(500).send('查询账单列表失败')
      return
    }
    resp.render('index', {
      notes: data,
      moment
    });
  })
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
  console.log(req.body, "req.body")
  accountModel.create(req.body, (error, data) => {
    if (error) {
      console.log('添加账单错误', error)
      resp.status(500).send('添加账单失败')
      return
    }
  })
  resp.render('success', {
    message: '添加成功',
    redirectUrl: '/'
  })
})

// 删除
router.get('/delete/:id', function (req, resp, next) {
  console.log("id", req.params.id)
  accountModel.deleteOne({_id: req.params.id}, (error, data) => {
    if (error) {
      console.log('删除账单失败', error)
      resp.status(500).send('删除账单失败')
      return
    }
    resp.render('success', {
      message: '删除成功',
      redirectUrl: '/'
    })
  })
})

module.exports = router;