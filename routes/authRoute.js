const express = require("express");
const router = express.Router();

const { getusersdata, login, signup } = require("../controller/authController");

router.get("/getusersdata", getusersdata);

router.post("/login", login);

router.post("/signup", signup);

module.exports = router;
