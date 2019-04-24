const router = express.Router()

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
