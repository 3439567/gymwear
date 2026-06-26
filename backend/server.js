const paymentRoutes = require("./routes/paymentRoutes");

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Razorpay = require('razorpay');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/api/payment", paymentRoutes);

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("✅ Connected to GymWear Database!"))
  .catch(err => console.error("❌ Database connection error:", err));

// Razorpay Instance
const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

// Product Routes
const productRoutes = require('./routes/productRoutes');
 app.use('/api/products', productRoutes);

// Home Route
app.get('/', (req, res) => {
  res.send('GymWear Backend is Running 🚀');
});

// Create Razorpay Order
app.post('/api/create-order', async (req, res) => {
  try {

    const { amount } = req.body;

    const options = {
      amount: amount * 100, // convert ₹ to paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create order"
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 GymWear Server running on http://localhost:${PORT}`);
});