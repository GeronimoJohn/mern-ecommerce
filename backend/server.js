const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routers/productRouter");
const userRouter = require("./routers/userRouter");

const app = express();

mongoose.connect(process.env.MONGODB_URL || "mongodb://localhost/amazona", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Server is ready");
});

// user router
app.use("/api/users", userRouter);

// products router
app.use("/api/products", productRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
