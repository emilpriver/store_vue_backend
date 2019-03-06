require('dotenv').config()
const mongoose = require("mongoose");
const url = process.env.DB_URL;

mongoose.connect(
  url,
  {
    useNewUrlParser: true
  }
);

mongoose.connection.on("error", function(err, res) {
  console.log("Could not connect to the mongodb. Exiting now...");
  process.exit();
});

mongoose.connection.once("open", function() {
  console.log("Successfully connected to the mongodb");
});

const db = mongoose.connection;

module.exports = db;
