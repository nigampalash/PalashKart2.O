let lastId = 1001;

// Pre-seeded users
const users = [
  {
    id: 1000,
    firstName: "Admin",
    lastName: "User",
    email: "admin@palashkart.com",
    password: "admin123",
    number: "9876543210",
    address: "Admin Head Office, Delhi",
    role: "admin"
  },
  {
    id: 1001,
    firstName: "John",
    lastName: "Doe",
    email: "user@palashkart.com",
    password: "user123",
    number: "9876543211",
    address: "123 Main Street, Mumbai",
    role: "user"
  }
];

// Pre-seeded products (devices)
const products = [
  {
    id: 1,
    name: "Samsung Galaxy S24 Ultra",
    price: 124999,
    image: "/images/galaxy_s24.png",
    desc: "12 GB RAM | 256 GB ROM | 6.8 inch Dynamic AMOLED 2X Display | 200MP Camera"
  },
  {
    id: 2,
    name: "Apple iPhone 15 Pro",
    price: 134900,
    image: "/images/iphone15.png",
    desc: "8 GB RAM | 128 GB ROM | 6.1 inch Super Retina XDR Display | A17 Pro Chip"
  },
  {
    id: 3,
    name: "OnePlus 12",
    price: 64999,
    image: "/images/default_phone.png",
    desc: "16 GB RAM | 512 GB ROM | 6.82 inch AMOLED Display | Snapdragon 8 Gen 3"
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    price: 93999,
    image: "/images/default_phone.png",
    desc: "12 GB RAM | 128 GB ROM | 6.7 inch Super Actua Display | Google Tensor G3"
  }
];

function getNextId() {
  lastId += 1;
  return lastId;
}

module.exports = {
  users,
  products,
  getNextId
};