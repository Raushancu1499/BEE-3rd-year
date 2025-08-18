const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const blogs = require("./model/blog");
const User = require("./model/user");
// const blog = require("./model/blog");
const blogRoute = require("./routes/blogsRoutes")

app.use("/api/blogs", blogRoute)

const userRoute = require("./routes/usersRoutes")
app.use("/api/users", userRoute)


app.listen(4445, () => {

    console.log("SERVER STARTED ")
})


mongoose.connect('mongodb://127.0.0.1:27017/g26db')
    .then(() => console.log('connected '));



