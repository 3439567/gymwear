const mongoose = require('mongoose');
require('dotenv').config();
const Product = require('./models/Product');

const products = [
  {
    name: "Muscle Fit Compression T-Shirt",
    price: 1299,
    image: "https://via.placeholder.com/300x300?text=Black+Compression",
    description: "High-quality compression t-shirt for gym workouts",
    category: "t-shirt",
    sizes: ["S", "M", "L", "XL"],
    colors: ["Black", "Blue", "Red"]
  },
  {
    name: "Gym Beast Hoodie",
    price: 2199,
    image: "https://via.placeholder.com/300x300?text=Grey+Hoodie",
    description: "Warm and stylish hoodie for pre and post workout",
    category: "hoodie",
    sizes: ["M", "L", "XL"],
    colors: ["Grey", "Black"]
  },
  {
    name: "Performance Leggings",
    price: 1599,
    image: "https://via.placeholder.com/300x300?text=Black+Leggings",
    description: "Stretchable and breathable leggings",
    category: "leggings",
    sizes: ["S", "M", "L"],
    colors: ["Black", "Purple"]
  },
  {
    name: "Training Shorts",
    price: 899,
    image: "https://via.placeholder.com/300x300?text=Blue+Shorts",
    description: "Lightweight shorts for intense training",
    category: "shorts",
    sizes: ["M", "L", "XL"],
    colors: ["Blue", "Black"]
  }
];

async function seedDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    await Product.deleteMany({}); // Clear old data
    await Product.insertMany(products);
    console.log("✅ Sample Gym Wear products added successfully!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

seedDatabase();