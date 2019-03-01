const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const products_schema = new Schema(
  {
    title: { 
        type: String,
        required: true
    },
    slug: { 
        type: String, 
        required: true, 
        unique: true 
    },
    thumbnail: {
        type: String,
        required: true,
        default: 'https://emilpriver-spaces.ams3.cdn.digitaloceanspaces.com/vue_store/default_shoe.jpg'
    }
  },
  { timestamps: true }
);

const products = mongoose.model("products", products_schema);

module.exports = products;