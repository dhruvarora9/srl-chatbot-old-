const express = require("express");
const router = express.Router();
const userController = require("../controller/user");

router.route("/login").post();