var express = require("express");
const app = express();
const bodyParser = require("body-parser");
const helmet = require("helmet");
const db = require("./db");
const cors = require('cors')

const port = process.env.PORT || 5000;

// Cors settings
app.use(cors({
  origin: 'http://localhost:8080'
}))
// Set up cors
app.use(helmet());

// Parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

// Parse application/json
app.use(bodyParser.json());

// Pouting for project
app.use("/api/products", require("./routes/products"));

// Ping
app.get("/api/ping", (req, res) => {
  res.json({ status: true });
});

//express settings
app.set("trust proxy", 1);

app.listen(port, () => {
  console.log(`Running on port ${port}`);
});