require("dotenv").config();

console.log("KEY:", process.env.RAZORPAY_KEY_ID);

const Razorpay = require("razorpay");

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

exports.createOrder = async (req, res) => {
  try {
    const options = {
      amount: req.body.amount * 100, // ₹500 => 50000 paise
      currency: "INR",
      receipt: `receipt_${Date.now()}`
    };

    const order = await razorpay.orders.create(options);

    res.json(order);

  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Order creation failed"
    });
  }
};