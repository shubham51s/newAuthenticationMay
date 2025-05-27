const mongoose = require("mongoose");
const userModel = require("../../models/User/user");

module.exports = createNewUser = async (req, res) => {
  try {
    const user = await userModel.create(req.body);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid user input",
      });
    }

    res.status(201).json({
      success: true,
      data: {
        user,
      },
    });
  } catch (err) {
    console.log("user creation error: ", err);
    res.status(404).json({
      success: false,
      message: "Invalid user details entered",
    });
  }
};
