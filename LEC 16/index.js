const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const blogs = require("./model/blog");

app.post("/blogs", async (req, res) => {
    let { title, body } = req.body;
    console.log(title, body);
    // res.send("got it ")
    let newblog = new blogs({
        title: title,
        body: body,
        date: Date.now()
    })
    await newblog.save()
    res.json({
        sucess: true,
        data: newblog,
        message: "blog added sucessfully "
    })
})



app.get("/blogs", async (req,res)=>{  
    let allblog = await blogs.find();
    res.json({
        sucess:true,
        data:allblog
    })

})


app.get("/blogs/:id",async(req,res)=>{
    let {id}=req.params
    let blog = await blogs.findOne({_id:id});
    res.json({
        sucess:true,
        data:blog 
    })

})


app.listen(4445, () => {

    console.log("SERVER STARTED ")
})


mongoose.connect('mongodb://127.0.0.1:27017/g26db')
    .then(() => console.log('connected '));



