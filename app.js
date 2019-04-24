const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const app = express()
const users = require('./users')

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })

router.get('/user', (req, res) => {
  res.json({
    code: 0,
    data: users.getUserList()
  })
})

router.get('/add', (req, res) => {
  if(users.addUser(req.query)) {
    res.json({
      code: 0
    })
  }
})
router.post('/add', jsonParser, (req, res) => {
  if(req.headers['x-requested-with'] === '2503'){
    if(users.addUser(req.body)) {
      res.json({
        code: 0
      })
    } else {
      res.json({
        code: -10001,
        msg: 'server error'
      })
    }
  } else {
    res.json({
      code: -1,
      msg: 'x-requested-with error'
    })
  }
})

router.get('/update', (req, res) => {
  if(users.updateUser(req.query)) {
    res.json({
      code: 0
    })
  } else {
    res.json({
      code: -1,
    })
  }
})
router.get('/del', (req, res) => {
  if(users.delUser(req.query)) {
    res.json({
      code: 0
    })
  }
})
router.get('/delMul', (req, res) => {
  if(users.delMulUser(req.query)) {
    res.json({
      code: 0
    })
  }
})

// 跨域设置
app.all("*", function(req, res, next) {
  res.header("Access-Control-Allow-Credentials", true)
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
  res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS")
  res.header("Content-Type", "application/json;charset=utf-8")
  next()
})

app.use('/api', router)

app.use('/', (req, res) => {
  res.send(`current url is: ${req.url}, please input write url`)
})

const port = process.env.PORT || 8888

module.exports = app.listen(port, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Server running at http://localhost:' + port + '\n')
})
