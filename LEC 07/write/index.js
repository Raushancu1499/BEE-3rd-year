const fs= require("fs");



fs.writeFile("../demo.txt","g26 hello", function(err,data){
    if(err)return console.log(err);
    console.log("success !!1");
})
  
fs.writeFile("../demo1.txt","good morning pineapple looking good very nice ", function(err){
    if(err)return console.log(err);
    console.log("success !!1");
})  
  fs.appendFile("../demo1.txt","oh oh oh ",function(err){
    if (err)return console.log(err);
    console.log("sucess ");
  })
