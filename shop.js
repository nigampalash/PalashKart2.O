const express = require('express');
const router = express.Router();
const shopController = require('../controllers/shopController');

router.get('/', shopController.ensureLoggedIn, shopController.showShop);
router.post('/add-to-cart', shopController.ensureLoggedIn, shopController.addToCart);
router.post('/buy', shopController.ensureLoggedIn, shopController.buyMobile);
router.get('/checkout', shopController.ensureLoggedIn, shopController.showCheckout);
router.post('/payment', shopController.ensureLoggedIn, shopController.handlePayment);
router.post('/pay', shopController.ensureLoggedIn, shopController.handlePayment);

module.exports = router;