const express = require('express');

const router = express.Router()  // small applications 

const blogs = require("../model/blog")
const { postaddblog, getreadblog, getoneblog, deleteblog } = require("../controller/blogcontroller")



router.post("/", postaddblog)



router.get("/", getreadblog)


router.get("/:id", getoneblog)





// delete blog 
router.delete("/:blogid", deleteblog)
module.exports = router;
