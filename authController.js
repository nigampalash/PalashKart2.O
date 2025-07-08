const { users, getNextId } = require('../routes/data');

// Show first registration form
exports.showFormStep1 = (req, res) => {
  res.render('FormStep1', { error: null, values: {} });
};
exports.handleFormStep1 = (req, res) => {
  req.session.formStep1 = req.body;
  res.redirect('/auth/register-step2');
};
exports.showFormStep2 = (req, res) => {
  res.render('FormStep2', { error: null, values: {} });
};
exports.handleFormStep2 = (req, res) => {
  const step1 = req.session.formStep1 || {};
  const step2 = req.body;
  if (!/^\d{10}$/.test(step1.number)) {
    return res.render('FormStep2', { error: 'Number must be exactly 10 digits.', values: step2 });
  }
  if (users.some(u => u.email === step2.email)) {
    return res.render('FormStep2', { error: 'Email already registered.', values: step2 });
  }
  const newUser = {
    id: getNextId(),
    firstName: step1.firstName,
    lastName: step1.lastName,
    number: step1.number,
    address: step1.address,
    email: step2.email,
    password: step2.password
  };
  users.push(newUser);
  req.session.formStep1 = null;
  res.render('register-success', { user: newUser });
};

// Login handler
exports.handleLogin = (req, res) => {
  const { id, password } = req.body;
  const user = users.find(u => u.id == id && u.password === password);
  if (!user) {
    return res.render('login', { error: 'Invalid ID or password.' });
  }
  req.session.loggedIn = true;
  req.session.user = user;
  req.session.cart = [];
  res.redirect('/shop');
};

// User list
exports.showUserList = (req, res) => {
  res.render('user-list', { users });
};
exports.deleteUser = (req, res) => {
  const id = parseInt(req.params.id);
  const idx = users.findIndex(u => u.id === id);
  if (idx !== -1) users.splice(idx, 1);
  res.redirect('/auth/user-list');
};
exports.deleteAllUsers = (req, res) => {
  users.length = 0;
  res.redirect('/auth/user-list');
};