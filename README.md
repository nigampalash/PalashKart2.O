# PalashKart2.O
Ecommerce website
Thanks, Palash! Here's a complete and professional `README.md` for your **Ecommerce Website** project, based on your folder structure and answers:

---

```markdown
# 🛍️ Ecommerce Website (Node.js + EJS)

A multi-page eCommerce web application built using **Node.js**, **Express**, **EJS**, and **Vanilla JS**.  
It features login and registration flows, a user list, a simulated shop/checkout experience — all handled with **in-memory arrays** (no database yet).

> 🚧 **Note:** This is an internship-level project made under the mentorship of **Sonam Maan**, a senior developer at *[Internship Org]*.

---

## 📂 Project Structure

```

Project-root/
│
├── app.js                        # Main entry point
│
├── controllers/                 # Route logic (MVC)
│   ├── authController.js
│   └── shopController.js
│
├── routes/                      # Express route files
│   ├── index.js
│   ├── auth.js
│   ├── shop.js
│   └── data.js
│
├── views/                       # EJS templates
│   ├── FormStep1.ejs
│   ├── FormStep2.ejs
│   ├── buy-success.ejs
│   ├── checkout.ejs
│   ├── login.ejs
│   ├── login-success.ejs
│   ├── payment-success.ejs
│   ├── register-success.ejs
│   ├── shop.ejs
│   ├── success.ejs
│   ├── user-list.ejs
│   └── partials/
│       ├── header.ejs
│       └── footer.ejs
│
├── public/                      # Static files (CSS, JS, images)
│
└── README.md

````

---

## 🧰 Tech Stack

- **Backend:** Node.js, Express.js
- **Templating Engine:** EJS
- **Frontend:** HTML5, CSS3, JavaScript
- **Middleware:** body-parser
- **Tools:** Nodemon (for development)

---

## 🚀 Features

- 🔐 User login and registration
- 👥 In-memory user list (no database yet)
- 🛒 Simulated shopping and checkout process
- 💳 Payment success simulation
- 📄 Multi-step form flow using EJS
- 🎨 Clean and responsive UI with header/footer partials

---

## ⚙️ Installation & Setup

```bash
# 1. Clone the repo
git clone https://github.com/nigampalash/PRODIGY_WD_01.git
cd PRODIGY_WD_01

# 2. Install dependencies
npm install

# 3. Run the server (with auto-restart)
nodemon app.js
# OR plain run
node app.js
````

Then open your browser and navigate to:
👉 `http://localhost:3000/`

---

## 🧪 Dependencies

```json
"dependencies": {
  "express": "^4.x",
  "ejs": "^3.x",
  "body-parser": "^1.x"
},
"devDependencies": {
  "nodemon": "^2.x"
}
```

---

## 🙌 Contributors & Credits

* 👨‍💻 **Palash Nigam Khare** — Developer
* 👩‍💻 **Sonam Maan** — Mentor & Project Guide

---

## 📌 Notes

* No database used yet — data is stored in temporary in-memory arrays.
* You can extend this project to add MongoDB, JWT authentication, and Stripe payments.

---

## 🪪 License

This project is for learning and internship purposes.
No official license applied yet — feel free to fork and explore!

---

## 🌐 Links

* 🔗 GitHub Repo: [PRODIGY\_WD\_01](https://github.com/nigampalash/PRODIGY_WD_01)

---

> Made with 💻 by Palash under the guidance of Sonam Maan

```

---

Let me know if you'd like to:
- Add deployment instructions (e.g. for Render/Vercel)
- Include screenshots
- Add badge-style headers (npm, node, etc.)
- Convert this into a live HTML landing page style README (with images and markdown preview)
```
