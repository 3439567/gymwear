const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  description: String,
  category: String,
  sizes: [String],
  colors: [String],
  inStock: { type: Boolean, default: true }
});

module.exports = mongoose.model('Product', productSchema);