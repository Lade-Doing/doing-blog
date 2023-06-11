const { Login } = require('../model/login')

login = (req,res)=>{
    try{
        Login().then(result=>{
            res.send(result)
        })
    }
    catch(e){
        res.send(e)
    }
}

module.exports = {
    login
}