const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registration form steps
router.get('/register', authController.showFormStep1);
router.post('/register', authController.handleFormStep1);
router.get('/register-step2', authController.showFormStep2);
router.post('/register-step2', authController.handleFormStep2);

// Login page (GET)
router.get('/login', (req, res) => res.render('login', { error: null }));
// Login handler (POST)
router.post('/login', authController.handleLogin);

// User list and deletion
router.get('/user-list', authController.showUserList);
router.post('/delete/:id', authController.deleteUser);
router.post('/delete-all', authController.deleteAllUsers);

module.exports = router;