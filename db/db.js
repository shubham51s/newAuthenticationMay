const mongoose = require("mongoose");

const connectDB = mongoose
  .connect(`mongodb+srv://shubhamsolat51:${process.env.PASSWORD}@cluster0.vshwy.mongodb.net/`)
  .then(() => console.log("mongodb connection success"))
  .catch((err) => console.log("mongodb connection error: ", err));

module.exports = connectDB;
