//生成id
const generateUuid  = require("../src/utils/uuid/index");
const token = require("../src/utils/token/index");
const bcryptjs = require("../src/utils/bcryptjs");
const { db } = require("./connection");

const initData = async()=>{
    const user = {
        id:"",
        token:"",
        sex:"",
        age:"",
        email:"",
        username:"",
        password:"",
        imageUrl:""
    }

    user.id = generateUuid();
    user.token = token.generateToken({name:"text"},"blog",3600);
    user.sex = "男";
    user.age = "21";
    user.email = "692797228@qq.com";
    user.username = "doing";
    await bcryptjs.hashPassword("qw7410852").then(res=>{
        console.log("加密后的密码",res)
        user.password = res
    });
    const isMatch = await bcryptjs.comparePassword("qw7410852",user.password);

    console.log(isMatch?"匹配":"不匹配",isMatch);
    user.imageUrl = "/uploads/user/头像.png";
    
    console.log("随机生成的唯一性id",user.id);
    console.log("生成的token",user.token);
    console.log(user);
    return user
}

//添加数据
const addUser = async(user)=>{
    const sql = `
    INSERT INTO users (id, token, sex, age, email, username, password, imageUrl)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const params = [
    user.id,
    user.token,
    user.sex,
    user.age,
    user.email,
    user.username,
    user.password,
    user.imageUrl,
  ];

  let { err,rows } = await db.async.all(sql,params)
  if(err === null){
    return {
        code:200,
        msg:'添加成功',
        rows
    }
  }else{
      return ({
          code:500,
          msg:'添加失败',
          err
      })
  }
}

async function industry(){
    const user = await initData();
    const isSuccess = await addUser(user);
    console.log(isSuccess.msg)
    console.log(isSuccess.err)
}

industry()