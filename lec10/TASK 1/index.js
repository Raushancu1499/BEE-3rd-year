// import express from 'express'
const express =require ('express');

const fs=require("fs");
const { json } = require('stream/consumers');

const app = express();
// app.use(express.json())

// app.get('/', (req, res) => {
//   res.send('Hello World')
// }) 
app.use(express.json());
app.post('/post',(req,res)=>{  
    let name =req.body.name;
    let age =req.body.age; 
    let users={name,age}
    let alluser=[];
    alluser.push(users);
    
    fs.readFile("./postdata.json","utf-8",function(err,data){  
        if (err) return res.json({
            error:err
        })
        if (data && data.length>0){
            alluser=JSON.parse(data);
        }
        alluser.push(users)
        fs.writeFile("./userdata",JSON.stringify(alluser),(err)=>{
            if (err) return console.log(err)
                console.log("data added")
        })
        

    })




    
})  
 

app.listen(3000, function(){
    console.log("server started")
})   

// fs.writeFile("./postdata.txt",JSON.stringify(),(err)=>{
//     if (err) return console.log(err);
//     console.log("data")

// })