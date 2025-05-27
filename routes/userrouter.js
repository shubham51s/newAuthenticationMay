const express = require("express");
const router = express.Router();
const userController = require("./../controller/");

router.route("/").post(userController.createNewUser);

module.exports = router;
