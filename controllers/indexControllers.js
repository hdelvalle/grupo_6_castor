const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));


const mainControllers = {
    index: (req, res) => {
        res.render('index', { products: products })
    },
    // login: (req, res)=>{
    //     res.sendFile(path.join(__dirname , '../views/login.html'))
    // },
    productCart: (req, res)=>{
        res.sendFile(path.join(__dirname , '../views/productCart.html'))
    },
    productDetail: (req, res) => {
        res.sendFile(path.join(__dirname, '../views/productDetail.html'))
    },
    // register: (req, res)=>{
    //     res.sendFile(path.join(__dirname , '../views/register.html'))
    // }  
    
}

module.exports = mainControllers;