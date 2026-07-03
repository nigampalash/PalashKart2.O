const { users, products } = require('../routes/data');

// Middleware to protect shop route
exports.ensureLoggedIn = (req, res, next) => {
  if (req.session.loggedIn) return next();
  res.redirect('/auth/login');
};

// Shop page
exports.showShop = (req, res) => {
  res.render('shop', { user: req.session.user, products, cart: req.session.cart || [] });
};

// Render Add Product page (Admins only)
exports.showAddProduct = (req, res) => {
  res.render('add-product', { error: null });
};

// Handle Add Product post request (Admins only)
exports.handleAddProduct = (req, res) => {
  const { name, price, desc } = req.body;
  
  if (!name || !price || !desc) {
    return res.render('add-product', { error: 'All fields are required.' });
  }
  
  const parsedPrice = parseFloat(price);
  if (isNaN(parsedPrice) || parsedPrice <= 0) {
    return res.render('add-product', { error: 'Please enter a valid price greater than 0.' });
  }
  
  const newProduct = {
    id: products.length > 0 ? Math.max(...products.map(p => p.id)) + 1 : 1,
    name: name.trim(),
    price: parsedPrice,
    image: req.file ? `/uploads/${req.file.filename}` : '/images/default_phone.png',
    desc: desc.trim()
  };
  
  products.push(newProduct);
  res.redirect('/shop');
};

// Add to cart
exports.addToCart = (req, res) => {
  const { productId } = req.body;
  const prod = products.find(p => p.id == productId);
  if (!prod) return res.redirect('/shop');
  if (!req.session.cart) req.session.cart = [];
  const existing = req.session.cart.find(item => item.id == productId);
  if (existing) {
    existing.qty += 1;
  } else {
    req.session.cart.push({ ...prod, qty: 1 });
  }
  res.redirect('/shop');
};

// Buy (checkout)
exports.buyMobile = (req, res) => {
  const cart = req.session.cart || [];
  req.session.cart = [];
  res.render('buy-success', { user: req.session.user, cart });
};

// Show checkout/payment page
exports.showCheckout = (req, res) => {
  const cart = req.session.cart || [];
  if (!cart.length) return res.redirect('/shop');
  res.render('checkout', { user: req.session.user, cart });
};

// Simulate payment gateway
exports.handlePayment = (req, res) => {
  const cart = req.session.cart || [];
  req.session.cart = [];
  res.render('payment-success', { user: req.session.user, cart });
};