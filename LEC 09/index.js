const express=require('express') 

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
//   res.send("<h1>ok<h1>")
//   res.sendFile(__dirname+"/index.html")
//   res.json({name:"nitesg",
//           age:24
//   })  
// res.end("hi")
})  

// path variable
// any  variablr in   path  url  is path variable  
//  1. query parametres  // route parametes
app.get("/watch",(req,res)=>{
    console.log(req.query);
    let videoid=req.query.v;
    let nid =req.query.n;
    res.send("id got it "+videoid+" "+nid)
}) 
// path parameters
// 2.params   no need of key value pairs 
app.get("/watch/:v/video/:n",(req,res)=>{
    console.log(req.params.v)
    res.send("got id ")
})


app.listen(3000 , function(){
    console.log("server started")
});   

// to hide your website logic we run program on system not directly on browser 
// res.end header is not sended and rres.send header is send 