const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const shopController = require('../controllers/shopController');
const { ensureAdmin } = require('../controllers/authController');

// Multer Storage Configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/uploads/');
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  }
});

// Multer Upload Limits and File Filter
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    const filetypes = /jpeg|jpg|png|webp|gif/;
    const mimetype = filetypes.test(file.mimetype);
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    if (mimetype && extname) {
      return cb(null, true);
    }
    cb(new Error("Only image uploads are allowed!"));
  }
});

router.get('/', shopController.ensureLoggedIn, shopController.showShop);
router.post('/add-to-cart', shopController.ensureLoggedIn, shopController.addToCart);
router.post('/buy', shopController.ensureLoggedIn, shopController.buyMobile);
router.get('/checkout', shopController.ensureLoggedIn, shopController.showCheckout);
router.post('/payment', shopController.ensureLoggedIn, shopController.handlePayment);
router.post('/pay', shopController.ensureLoggedIn, shopController.handlePayment);

// Admin-only product upload routes
router.get('/add-product', shopController.ensureLoggedIn, ensureAdmin, shopController.showAddProduct);
router.post('/add-product', shopController.ensureLoggedIn, ensureAdmin, upload.single('productImage'), shopController.handleAddProduct);

module.exports = router;