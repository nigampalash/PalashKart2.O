const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Registration form steps
router.get('/register', authController.showFormStep1);
router.post('/register', authController.handleFormStep1);
router.get('/register-step2', authController.showFormStep2);
router.post('/register-step2', authController.handleFormStep2);

// Login page (GET)
router.get('/login', (req, res) => {
  if (req.session.loggedIn) return res.redirect('/shop');
  res.render('login', { error: null });
});
// Login handler (POST)
router.post('/login', authController.handleLogin);

// Logout (GET)
router.get('/logout', authController.logout);

// User list and deletion (Protected by Admin check)
router.get('/user-list', authController.ensureAdmin, authController.showUserList);
router.post('/delete/:id', authController.ensureAdmin, authController.deleteUser);
router.post('/delete-all', authController.ensureAdmin, authController.deleteAllUsers);

module.exports = router;