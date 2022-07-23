const express = require('express');
const router = express.Router();
const productsControllers = require('../controllers/productsControllers');

router.get('/productCart', productsControllers.vistaIndex);
router.get('/productDetail', productsControllers.detalleMenu);


module.exports = router;