const users = require('../utils/users')
//const express = require('express')
//const login = express.Router();


const login = (req,res) => {
    const {email,password}=req.query

    const userFound = users.find((user) => user.email === email && user.password === password)

     return  userFound
    ? res.status(200).json({ access: true})
    : res.status(200).json({ access: false})
}



module.exports = {login}; 



/* if(email === users.email && password === users.password){
    return res.status(200).json({acces: true})
}else{
    return res.status(404).json({acces: false})
} */