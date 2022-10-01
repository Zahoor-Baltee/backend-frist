
const express = require("express");
const router = express.Router();

const authrouter = require('./authRoute');
const postrouter = require('./postRoute');


router.use('/auth',authrouter);
router.use('/post',postrouter);

module.exports = router;