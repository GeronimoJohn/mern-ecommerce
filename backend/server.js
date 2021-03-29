const express = require("express");
const mongoose = require("mongoose");
const productRouter = require("./routers/productRouter");
const dotenv = require("dotenv");
const userRouter = require("./routers/userRouter");
const orderRouter = require("./routers/orderRouter");

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

// order router
app.use("/api/orders", orderRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Server at http://localhost:${PORT}`);
});
