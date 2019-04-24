const formatTime = require('./util')

let users = [{
  id: 1,
  date: '2016-05-03',
  name: '王小虎',
  account_name: 'wxhong',
  phone: 13600000000,
  address: '上海市普陀区金沙江路 1518 弄'
}, {
  id: 2,
  date: '2016-05-02',
  name: '王虎',
  account_name: 'wxhong',
  phone: 13600000000,
  address: '北京市普陀区金沙江路 1518 弄'
}, {
  id: 3,
  date: '2016-05-04',
  name: '王虎虎',
  account_name: 'wxhong',
  phone: 13600000000,
  address: '杭州市普陀区金沙江路 1518 弄'
}, {
  id: 4,
  date: '2016-05-01',
  name: '老虎',
  account_name: 'wxhong',
  phone: 13600000000,
  address: '天津市普陀区金沙江路 1518 弄'
}, {
  id: 5,
  date: '2016-05-08',
  name: '大虎',
  account_name: 'wxhong',
  phone: 13600000000,
  address: '成都市普陀区金沙江路 1518 弄'
}, {
  id: 6,
  date: '2016-05-06',
  name: '虎子',
  account_name: 'wxhong',
  phone: 13600000000,
  address: '武汉市普陀区金沙江路 1518 弄'
}, {
  id: 7,
  date: '2016-05-07',
  name: '旺旺',
  account_name: 'wxhong',
  phone: 13600000000,
  address: '广州市普陀区金沙江路 1518 弄'
}]

exports.getUserList = () => users

exports.addUser = ({name, account_name, phone, address}) => {
  let id = users.length > 0 ? (users[users.length - 1].id + 1) : 1
  let date = formatTime(new Date())
  users.push({
    id, date, name, account_name, phone, address
  })
  return true
}
exports.updateUser = ({id, date, name, account_name, phone, address}) => {
  for (const v of users) {
    if (v.id == id) {
      const index = users.indexOf(v)
      users.splice(index, 1, {id, date, name, account_name, phone, address})
      return true
    }
  }
}
exports.delUser = ({id}) => {
  let index = -1
  for (const v of users) {
    if (v.id == id) {
      index = users.indexOf(v)
    }
  }
  if(index >= 0) {
    users.splice(index, 1)
    return true
  } else {
    return false
  }
}
exports.delMulUser = ({ids}) => {
  users = users.filter((v, i, _this) => {
    if(ids.includes(v.id.toString())) {
      return false
    } else {
      return true
    }
  })
  return true
}
