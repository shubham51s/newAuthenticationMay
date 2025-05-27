const express = require("express");
const app = express();
require("./db/db");
const mongoose = require("mongoose");
require("dotenv").config();
const userRouter = require("./routes/userrouter");

app.get("/", async (req, res) => {
  res.status(200).json({
    success: true,
    message: "done",
  });
});

app.use();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("app listening on PORT: ", PORT);
});
