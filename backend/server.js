const express = require("express");
const mongoose = require("mongoose");
const data = require("./data");
const { default: userRouter } = require("./routers/userRouter");

const app = express();

mongoose.connect("mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.use("/api/users", userRouter);

app.get("/api/products/:id", (req, res) => {
  const product = data.products.find((x) => x._id === req.params.id);
  if (product) {
    res.send(product);
  } else {
    res.status(404).send({ message: "Product not Found" });
  }
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
