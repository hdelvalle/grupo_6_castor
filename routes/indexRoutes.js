const express = require('express');
const router = express.Router();
const mainControllers = require('../controllers/indexControllers');

router.get('/', mainControllers.index);


module.exports = router;



