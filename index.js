const express = require("express");
const app = express();

const PORT = 3000;

const authRoute = require("./routes/auth");

// Middleware
app.use(express.json());

// Route middleware
app.use("/api/user", authRoute);

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
