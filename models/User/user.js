const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: email,
    required: [true, "Please enter valid email address"],
    unique: true,
  },
  password: {
    type: String,
    requied: [true, "Please enter your password"],
    validate: {
      validator: (minlength = 8),
    },
  },
  gender: {
    type: String,
    required: [true, "Please select gender"],
    enum: ["male", "female", "other"],
  },
});

const userModel = new mongoose.model("user", userSchema);

module.exports = userModel;
