const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const blocks_schema = new Schema(
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
        default: 'https://emilpriver-spaces.ams3.cdn.digitaloceanspaces.com/vue_store/old_stuffs.jpg'
    }
  },
  { timestamps: true }
);

const blocks = mongoose.model("blocks", blocks_schema);

module.exports = blocks;