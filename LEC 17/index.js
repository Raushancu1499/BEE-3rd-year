const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const blogs = require("./model/blog");
const User = require("./model/user");




app.post("/blogs", async (req, res) => {
    let { title, body, userid } = req.body;
    // console.log(title, body);
    // res.send("got it ")
    let userexist = await User.findById(userid);
    if (userexist) {
        let newblog = new blogs({
            title: title,
            body: body,
            date: Date.now(),
            userid: userid
        })
        await newblog.save()
        userexist.blogs.push(newblog._id)
        await userexist.save();
        res.json({
            sucess: true,
            data: newblog,
            message: "blog added sucessfully "
        })
    }
})



app.get("/blogs", async (req, res) => {
    let allblog = await blogs.find();
    res.json({
        sucess: true,
        data: allblog
    })

})


app.get("/blogs/:id", async (req, res) => {
    let { id } = req.params
    let blog = await blogs.findOne({ _id: id });
    res.json({
        sucess: true,
        data: blog
    })

})



// USER 
app.post("/users", async (req, res) => {
    let { email, username, password } = req.body;

    let newUser = new User({
        email: email,
        username: username,
        password: password,
    });

    await newUser.save();
    res.json({
        success: true,
        data: newUser,
        message: "User added successfully",
    });
});

app.get("/users", async (req, res) => {
    let allUsers = await User.find().populate("blogs");
    res.json({
        success: true,
        data: allUsers,
    });
});

// Get single user by ID
app.get("/users/:id", async (req, res) => {
    let { id } = req.params;
    let userexist = await User.findOne({ _id: id }).populate("blogs")
    if (userexist){
    res.json({
        success: true,
        data: userexist,
    });
}
   
});





app.listen(4445, () => {

    console.log("SERVER STARTED ")
})


mongoose.connect('mongodb://127.0.0.1:27017/g26db')
    .then(() => console.log('connected '));



