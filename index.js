const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");

dotenv.config();

mongoose.connect(
  process.env.DB_CONNECT,
  { useUnifiedTopology: true, useNewUrlParser: true },
  () => {
    console.log("Connected to db!");
  }
);

const PORT = 3000;

// Middleware
app.use(express.json());

// Route middleware
app.use("/api/user", authRoute);
app.use("/api/post", postRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
