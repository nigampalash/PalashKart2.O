const { users, getNextId } = require('../routes/data');

// Show first registration form
exports.showFormStep1 = (req, res) => {
  res.render('FormStep1', { error: null, values: {} });
};

exports.handleFormStep1 = (req, res) => {
  const { firstName, lastName, address, number } = req.body;
  if (!/^\d{10}$/.test(number)) {
    return res.render('FormStep1', { error: 'Mobile number must be exactly 10 digits.', values: req.body });
  }
  req.session.formStep1 = req.body;
  res.redirect('/auth/register-step2');
};

exports.showFormStep2 = (req, res) => {
  if (!req.session.formStep1) {
    return res.redirect('/auth/register');
  }
  res.render('FormStep2', { error: null, values: {} });
};

exports.handleFormStep2 = (req, res) => {
  const step1 = req.session.formStep1 || {};
  const step2 = req.body;
  
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step2.email)) {
    return res.render('FormStep2', { error: 'Invalid email address format.', values: step2 });
  }
  if (!step2.password || step2.password.length < 6) {
    return res.render('FormStep2', { error: 'Password must be at least 6 characters long.', values: step2 });
  }
  if (users.some(u => u.email.toLowerCase() === step2.email.toLowerCase())) {
    return res.render('FormStep2', { error: 'Email already registered.', values: step2 });
  }
  
  const newUser = {
    id: getNextId(),
    firstName: step1.firstName,
    lastName: step1.lastName,
    number: step1.number,
    address: step1.address,
    email: step2.email.toLowerCase(),
    password: step2.password,
    role: step2.role || 'user'
  };
  
  users.push(newUser);
  req.session.formStep1 = null;
  res.render('register-success', { user: newUser });
};

// Login handler supporting Email or ID Number
exports.handleLogin = (req, res) => {
  const { idOrEmail, password } = req.body;
  const target = idOrEmail ? idOrEmail.trim().toLowerCase() : '';
  
  const user = users.find(u => 
    (u.id.toString() === target || u.email.toLowerCase() === target) && 
    u.password === password
  );
  
  if (!user) {
    return res.render('login', { error: 'Invalid ID/Email or password.' });
  }
  
  req.session.loggedIn = true;
  req.session.user = user;
  req.session.cart = [];
  res.redirect('/shop');
};

// Logout handler
exports.logout = (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
};

// Middleware to ensure Admin privileges
exports.ensureAdmin = (req, res, next) => {
  if (req.session.loggedIn && req.session.user && req.session.user.role === 'admin') {
    return next();
  }
  res.status(403).send('Forbidden: Admin access required.');
};

// User list
exports.showUserList = (req, res) => {
  res.render('user-list', { users });
};

// Delete user (Admins only, cannot delete themselves)
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const currentUserId = req.session.user ? req.session.user.id : null;
  
  if (id === currentUserId) {
    return res.status(400).send('Bad Request: You cannot delete your own account.');
  }
  
  const idx = users.findIndex(u => u.id === id);
  if (idx !== -1) users.splice(idx, 1);
  res.redirect('/auth/user-list');
};

// Delete all other users (Admins only)
exports.deleteAllUsers = (req, res) => {
  const currentUserId = req.session.user ? req.session.user.id : null;
  for (let i = users.length - 1; i >= 0; i--) {
    if (users[i].id !== currentUserId) {
      users.splice(i, 1);
    }
  }
  res.redirect('/auth/user-list');
};