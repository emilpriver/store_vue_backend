const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cart_schema = new Schema(
  {
    cart_id: {
      type: String,
      required: true,
      default: ''
    }, 
    cart_items: {
      type: Array,
      required: true,
      default: []
    }
  },
  { timestamps: true }
);

const carts = mongoose.model("carts", cart_schema);

module.exports = carts;