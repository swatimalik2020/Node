const express = require('express');

const productController = require('../controllers/productController');

const router = express.Router();

router.route('/products')
    .get(productController.getProducts)
    .post(productController.createProduct);

router.route('/products/:productId')
    .delete(productController.deleteProduct)
    .put(productController.updateProduct);

module.exports = router;