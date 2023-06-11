
//导入其他路由
const Login = require('./login')

// 导出
module.exports = (app)=>{
    app.use('/login', Login)
}
