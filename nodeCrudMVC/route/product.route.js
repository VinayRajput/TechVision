const express = require('express');
const router = express.Router(); 
const productController = require('../contollers/product.controller');

router.get('/addProduct', productController.add);
router.get('/updateProduct', productController.update);

module.exports = router;