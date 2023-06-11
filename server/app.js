const path = require('path')
const express = require('express')
const app = new express()
//引入路由
const Routers = require('./src/routes/index')
const swaggerDoc = require('./src/swagger/swaggerDoc')
app.use(express.json())
//开启调用静态资源
app.use(express.static(path.join(__dirname, 'public')))
app.use('/test',(req,res)=>{
    res.json({
        msg:'测试成功'
    })
})
//解决跨域问题：
app.all('*', function (req, res, next) {
    //设置跨域允许访问的类型
    res.header('Access-Control-Allow-Origin', '*');
    //设置前端带过来的访问请求头
    res.header('Access-Control-Allow-Headers', 'Content-Type,token');
    //设置请求方法
    res.header('Access-Control-Allow-Methods', '*');
    next();
});


//调用路由以及swaggeer
Routers(app)
swaggerDoc(app)

app.listen(3000)