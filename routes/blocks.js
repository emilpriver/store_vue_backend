const express = require("express");
const router = express.Router();
const blocks_schema = require("../schemas/blocks");


// Get users collection
router.get("/front_page", async (req, res) => {

  const blocks = await blocks_schema.find({
    place: 'front_page'
  })

  if (blocks) {
    res.json({ blocks });
  } else {
    res.send({ error: "Post not found" });
  }
});



module.exports = router;