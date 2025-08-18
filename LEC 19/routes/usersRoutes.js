const express = require('express');

const router = express.Router()  // small applications 

const User = require("../model/user")
const { postuser, getreadalluser, getsingleuser, } = require("../controller/usercontroller")





// USER 
router.post("/", postuser)

router.get("/", getreadalluser)

// Get single user by ID
router.get("//:id", getsingleuser)


module.exports = router;