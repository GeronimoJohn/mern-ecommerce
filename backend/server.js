const express = require("express");
const data = require("./data");

const app = express();

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
