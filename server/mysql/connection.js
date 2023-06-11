const data = require('./config')
const mysql = require('mysql')

var db = mysql.createConnection(data)

db.connect( (err) => {
    if (err) {
        console.log('数据库连接失败')
    } else {
        console.log('数据库连接成功')
    }
})

db.async = {} //创建一个空对象
//创建一个可以用来使用promise对象的工具方法
db.async.all = (sql,params)=>{
    return new Promise((resolve,reject)=>{
        db.query(sql,params,(err,rows) => {
            //返回接口类型
            resolve({err,rows})
        })
    })
}

module.exports={
    db
}