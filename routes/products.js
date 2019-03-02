const express = require("express");
const router = express.Router();
const products_schema = require("../schemas/products");


// Get product collection
router.get("/", async (req, res) => {

  const products = await products_schema.find()

  if (products) {
    res.json({ products });
  } else {
    res.send({ error: "Post not found" });
  }
});

// Get sginle product collection
router.get("/:slug", async (req, res) => {
  
  const {slug} = req.params

  const products = await products_schema.findOne({
    slug
  })

  if (products) {
    res.json({ products });
  } else {
    res.send({ error: "Post not found" });
  }
});


module.exports = router;