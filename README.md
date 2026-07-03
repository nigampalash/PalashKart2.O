# 🛍️ PalashKart 2.0 - Ecommerce Website (Node.js + EJS)

A professional, multi-page eCommerce web application built using **Node.js**, **Express**, **EJS**, and **Vanilla JS**.  
It features role-based access control, a secure dual-login/registration flow, interactive device additions (with image uploading via Multer), and a simulated shop checkout experience. All data is managed using **in-memory arrays**.

---

## 📂 Project Structure

```
PalashKart2.O/
│
├── app.js                       # Main application entry point
├── package.json                 # Project dependencies and details
├── .gitignore                   # Excluded directories (node_modules, uploads)
│
├── controllers/                 # Route logic (MVC Pattern)
│   ├── authController.js        # User auth, registration & role checks
│   └── shopController.js        # Shop page, cart, checkout & product upload
│
├── routes/                      # Express route endpoints
│   ├── index.js                 # Root router (handles home & redirection)
│   ├── auth.js                  # Authentication & User list routes
│   └── shop.js                  # Storefront & Product addition routes
│
├── public/                      # Publicly accessible static assets
│   ├── style.css                # Global styling stylesheet
│   ├── click.mp3                # Interactive button audio feedback
│   ├── images/                  # Pre-seeded local device mockup images
│   └── uploads/                 # Target folder for user-uploaded product images
│
└── views/                       # EJS Template engine views
    ├── FormStep1.ejs            # Registration Step 1 (Contact info)
    ├── FormStep2.ejs            # Registration Step 2 (Account details & Role)
    ├── register-success.ejs     # Registration completion with assigned ID
    ├── login.ejs                # Login page (supports Email or ID Number)
    ├── shop.ejs                 # Storefront & Admin Control Panel
    ├── checkout.ejs             # Shopping cart checkout summary
    ├── add-product.ejs          # Admin device upload form
    ├── buy-success.ejs          # Simulates instant purchase confirmation
    ├── payment-success.ejs      # Simulates payment gateway success
    ├── user-list.ejs            # Admin-only dashboard to manage registered users
    └── partials/
        ├── header.ejs           # Navigation bar (context & role-aware)
        └── footer.ejs           # Copyright footer markup
```

---

## 🧰 Tech Stack

* **Backend:** Node.js, Express.js (v5.x)
* **Templating Engine:** EJS (Embedded JavaScript)
* **File Uploads:** Multer (processes device image uploads)
* **Session Middleware:** express-session (stores user authentication state and shopping cart)
* **Frontend:** HTML5, CSS3 (Custom Responsive Layouts), JavaScript
* **Audio Interactions:** Web Audio API (interactive button click effects)

---

## 🚀 Key Features

### 🔐 1. Role-Based Access & Registration
* Users select their role (**User** or **Admin**) during Step 2 of registration.
* **Authentication Validation**:
  * Step 1 enforces a strict **10-digit mobile number** pattern.
  * Step 2 validates **email format** and enforces a **minimum 6-character password**.
  * Prevents duplicate email signups.

### 🔑 2. Dual-Login Flow
* Users can log in using either their registered **Email address** or their system-assigned numerical **ID Number**.

### 👑 3. Admin Control Panel
* Logging in as an **Admin** displays a control banner on the Shop page.
* Admins can navigate to **Add Device** to upload custom devices and **Manage Users** to view or delete profiles.
* Non-admin roles (standard Users) are blocked from accessing these dashboards.

### 🖼️ 4. Dynamic Device Uploading (Multer Integration)
* Admins can dynamically register new phones/devices.
* Form includes fields for: Name, Price (validated positive float), Specifications, and **Image Upload**.
* Uploaded files are filtered to image-only formats and saved in `public/uploads/` on the server.

### 🛒 5. Simulated E-Commerce Cart & Checkout
* Live item counter in the header.
* Users can add multiples of the same device, inspect their checkout list, and clear/submit checkout orders.

---

## ⚙️ Installation & Setup

Follow these steps to run the project locally:

```bash
# 1. Clone the repository
git clone https://github.com/nigampalash/PalashKart2.O.git
cd PalashKart2.O

# 2. Install dependencies
npm install

# 3. Start the application
node app.js
```

Once running, open your web browser and go to:
👉 **`http://localhost:3000`**

---

## 🧪 Testing Credentials

To test both flows immediately without registering, use these pre-seeded accounts:

| Role | Email | Password |
| :--- | :--- | :--- |
| **👑 Admin** | `admin@palashkart.com` | `admin123` |
| **👤 User** | `user@palashkart.com` | `user123` |

---

## 👨‍💻 Contributors

* **Palash Nigam Khare** — Lead Developer
* **Sonam Maan** — Mentor & Senior Developer
