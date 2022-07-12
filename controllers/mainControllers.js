const express = require('express');
const app = express();


const mainControllers = {
    home: (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/home.html'))
    },
    login: (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/login.html'))
    },
    productCart: (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/productCart.html'))
    },
    productDetail: (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/productDetail.html'))
    },
    register: (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/register.html'))
    }   
    
}

module.exports = mainControllers;