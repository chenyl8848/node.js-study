var express = require('express');
const md5 = require('md5')
const jwt = require('jsonwebtoken')

const accountModel = require('../../model/accountModel');
const userModel = require('../../model/userModel');
const checkTokenMiddleware = require('../../middlewares/checkTokenMiddleware')
const {SECRECT, EXPIRE_TIME} = require('../../config/index')

var router = express.Router();

// 获取 token
router.post('/login', function(req, resp, next) {
  let {username, password} = req.body
  userModel.findOne({username: username, password: md5(password)}, (error, data) => {
    if (error) {
      console.log('登录失败', error)
      resp.json({
        code: -1,
        message: '登录失败',
        data: null
      })
      return
    }

    if (!data) {
      resp.json({
        code: -1,
        message: '用户不存在或密码不正确',
        data: null
      })
      return
    }

    // 生成 token
    console.log(SECRECT, EXPIRE_TIME)
    let token = jwt.sign({username: data.username}, SECRECT, {expiresIn: EXPIRE_TIME})
    resp.json({
      code: 0,
      message: '登录成功',
      data: token
    })
  })
  
})

// 获取列表
router.get('/account', checkTokenMiddleware, function (req, resp, next) {
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
router.get('/account/:id', checkTokenMiddleware, function (req, resp, next) {
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
router.post('/account', checkTokenMiddleware, function (req, resp, next) {
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
router.put('/account/:id', checkTokenMiddleware, function (req, resp, next) {
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
router.patch('/account/:id', checkTokenMiddleware, function (req, resp, next) {
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
router.delete('/account/:id', checkTokenMiddleware, function(req, resp, next) {
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