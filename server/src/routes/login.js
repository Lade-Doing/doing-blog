const express = require('express')
//定义路由
const Login = express.Router()
const { login } = require('../controller/login.js');

// 登录接口
Login.post('/login',login )

module.exports = Login
