const express = require('express');
const router = express.Router();

// Home route: show welcome page
router.get('/', (req, res) => res.render('welcome'));

// Root route: redirect to login
router.get('/login', (req, res) => res.redirect('/auth/login'));

// Use auth and shop routes
const authRoutes = require('./auth');
const shopRoutes = require('./shop');
router.use('/auth', authRoutes);
router.use('/shop', shopRoutes);

module.exports = router;