const mongoose = require("mongoose");

const ReceiptSchema = new mongoose.Schema({
    clients: [String],
    orderItems: [
    {
      name: String,
      price: Number,
      qty: Number,
      orderedItems: String
    },
  ],
});

const Receipt = mongoose.model('Receipt', ReceiptSchema)

module.exports = Receipt