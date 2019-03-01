const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/vue_store";

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
