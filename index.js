const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to db!");
  }
);

const PORT = 3000;

const authRoute = require("./routes/auth");

// Middleware
app.use(express.json());

// Route middleware
app.use("/api/user", authRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
