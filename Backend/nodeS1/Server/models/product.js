const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: [3, "Name must be at least 3 character"]
  },
  price: {
    type: Number,
    required: true,
    min: [1, "Price must be greater than 0"]

  }
});

module.exports = mongoose.model("Product", productSchema);
