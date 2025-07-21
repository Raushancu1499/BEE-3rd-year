const fs=require("fs");
// fs.readFile("../users.txt","utf-8" ,function(err,data){
//     if (err) return console.log(err);
//         // console.log(JSON.parse(data)[0]);


//         let users =JSON.parse(data);
//         console.log(users[0].name)
// })  
 //utf-8 is mandatory while using readfile  
//  json.parse helps to coonvert object to string 


const {read}=require("../IOoperation/util")
async function readFile(filepath){
    let data =await read(filepath);
     console.log(data)
}
readFile("../users.txt");