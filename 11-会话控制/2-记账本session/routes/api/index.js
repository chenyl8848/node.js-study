var express = require('express');
const accountModel = require('../../model/accountModel');

var router = express.Router();

// 获取列表
router.get('/account', function (req, resp, next) {
  accountModel.find()
    .sort({
      happenTime: -1
    })
    .exec((error, data) => {
      if (error) {
        console.log('查询账单列表出错', error)
        resp.json({
          code: -1,
          message: '查询账单列表出错',
          data: null
        })
        return
      }
      resp.json({
        code: 0,
        message: '成功',
        data
      });
    })
})

// 根据id获取
router.get('/account/:id', function (req, resp, next) {
  accountModel.find({
    _id: req.params.id
  }, (error, data) => {
    if (error) {
      console.log('根据id获取账单失败', error)
      resp.json({
        code: -1,
        message: '获取账单失败',
        data: null
      })
      return;
    }
    resp.json({
      code: 0,
      message: '成功',
      data
    })
  })
})

// 新增
router.post('/account', function (req, resp, next) {
  accountModel.create(req.body, (error, data) => {
    if (error) {
      console.log('新增账单失败', error)
      resp.json({
        code: -1,
        message: '新增账单失败',
        data: null
      })
      return
    }
    resp.json({
      code: 0,
      message: '新增账单成功',
      data
    })
  })
})

// 修改
router.put('/account/:id', function (req, resp, next) {
  console.log(req.body)
  accountModel.updateOne({_id: req.params.id}, {...req.body}, (error, data) => {
    if (error) {
      console.log('更新账单失败', error)
      resp.json({
        code: -1,
        message: '更新账单失败',
        data: null
      })
      return;
    }
    resp.json({
      code: 0,
      message: '更新账单成功',
      data
    })
  })
})

// 修改
router.patch('/account/:id', function (req, resp, next) {
  accountModel.updateOne({_id: req.params.id}, {...req.body}, (error, data) => {
    if (error) {
      console.log('更新账单失败', error)
      resp.json({
        code: -1,
        message: '更新账单失败',
        data: null
      })
      return;
    }
    resp.json({
      code: 0,
      message: '更新账单成功',
      data
    })
  })
})

// 删除
router.delete('/account/:id', function(req, resp, next) {
  accountModel.deleteOne({_id: req.params.id}, (error, data) => {
    if (error) {
      console.log('删除账单失败', error)
      resp.json({
        code: -1,
        message: '删除账单失败',
        data: null
      })
      return
    }
    resp.json({
      code: 0,
      message: '删除账单成功',
      data
    })
  })
})

module.exports = router;