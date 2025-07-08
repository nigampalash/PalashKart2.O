const { users } = require('../routes/data');

// PalashKart product data
const products = [
  {id: 1, name: "Samsung Galaxy S24", price: 64999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.1 inch Display"},
  {id: 2, name: "Apple iPhone 15", price: 72999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "6 GB RAM | 128 GB ROM | 6.1 inch Display"},
  {id: 3, name: "OnePlus Nord CE 4", price: 24999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 4, name: "Realme 12 Pro+", price: 28999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.7 inch Display"},
  {id: 5, name: "Vivo V30 Pro", price: 41999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "12 GB RAM | 512 GB ROM | 6.78 inch Display"},
  {id: 6, name: "Xiaomi Redmi Note 13 Pro", price: 23999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.67 inch Display"},
  {id: 7, name: "Motorola Edge 50 Pro", price: 31999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.7 inch Display"},
  {id: 8, name: "Google Pixel 8", price: 59999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.2 inch Display"},
  {id: 9, name: "Nothing Phone 2a", price: 23999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 10, name: "POCO X6 Pro", price: 26999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "12 GB RAM | 512 GB ROM | 6.67 inch Display"},
  {id: 11, name: "Infinix Note 40 Pro", price: 19999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.78 inch Display"},
  {id: 12, name: "Tecno Camon 30 Pro", price: 17999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 256 GB ROM | 6.78 inch Display"},
  {id: 13, name: "OPPO F25 Pro", price: 23999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 14, name: "iQOO Z9", price: 18999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.67 inch Display"},
  {id: 15, name: "Lava Blaze Curve 5G", price: 17999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.67 inch Display"},
  {id: 16, name: "Samsung Galaxy M55", price: 24999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.7 inch Display"},
  {id: 17, name: "Redmi 13C", price: 8999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 128 GB ROM | 6.74 inch Display"},
  {id: 18, name: "Vivo T3x", price: 14999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "6 GB RAM | 128 GB ROM | 6.72 inch Display"},
  {id: 19, name: "POCO M6 Pro", price: 10999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 64 GB ROM | 6.79 inch Display"},
  {id: 20, name: "Realme Narzo 70 Pro", price: 19999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.67 inch Display"},
  {id: 21, name: "Samsung Galaxy F15", price: 13999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "6 GB RAM | 128 GB ROM | 6.5 inch Display"},
  {id: 22, name: "Infinix Smart 8", price: 7499, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 64 GB ROM | 6.6 inch Display"},
  {id: 23, name: "Tecno Spark 20", price: 9999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "8 GB RAM | 128 GB ROM | 6.56 inch Display"},
  {id: 24, name: "OPPO A59 5G", price: 14999, image: "https://rukminim2.flixcart.com/image/416/416/xif0q/mobile/8/9/n/-original-imagx9egm9mgmvab.jpeg?q=70", desc: "4 GB RAM | 128 GB ROM | 6.56 inch Display"}
];

// Middleware to protect shop route
exports.ensureLoggedIn = (req, res, next) => {
  if (req.session.loggedIn) return next();
  res.redirect('/auth/login');
};

// Shop page
exports.showShop = (req, res) => {
  res.render('shop', { user: req.session.user, products, cart: req.session.cart || [] });
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