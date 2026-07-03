const express = require('express');
const path = require('path');
const fs = require('fs');
const session = require('express-session');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Create public/uploads directory if it doesn't exist
const uploadsDir = path.join(__dirname, 'public', 'uploads');
if (!fs.existsSync(uploadsDir)){
  fs.mkdirSync(uploadsDir, { recursive: true });
}

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'secret-key',
  resave: false,
  saveUninitialized: true
}));

// Session local variable middleware for EJS templates
app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.loggedIn = req.session.loggedIn || false;
  res.locals.cart = req.session.cart || [];
  next();
});

const indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});