let users=[
    {
        name:"Nitesh",
        age:24,
        address:"delhi"
    },
    {
        name:"ritik",
        age:25,
        address:"faridabad"
    }
]  


let user1=[
    {
        name:"siddhnat",
        age:25,
        address: "bcroad"
    },
    {
        name:"sushobhit",
        age:12,
        address:"phkholaroad "
    }
]

const fs = require("fs"); //by default callback API is received when we call fs , 

//if we wanna use promise API , then we needa use 
fs.writeFile("./1.txt",JSON.stringify(users),function(err){
    if(err)console.log(err);
    console.log("users written!!");
})
   

fs.writeFile("./2.txt",JSON.stringify(user1),function(err){
    if(err)console.log(err);
    console.log("users written!!");
})
//json format to work on object - object to readable and vice  


fs.readFile("./1.txt","utf-8" ,function(err,data1){
    if (err) return console.log(err);
    let users1 = JSON.parse(data1);
        fs.readFile("./2.txt","utf-8" ,function(err,data2){
            if (err) return console.log(err);
             let users2 = JSON.parse(data2);
              // brute force 
            //  let merged = [];
             
            //  for(let i=0;i<users1.length;i++){
            //     merged.push(users1[i]);
            //  }

            //  for(let i=0;i<users2.length;i++){
            //     merged.push(users2[i]);
            //  }   
            // let merged = [...users1,...users2]; // spread operator ...
            let merged=users1.concat(users2);//concat operator .concat

             fs.writeFile("./result.txt",JSON.stringify(merged),function(err){
    if(err)console.log(err);
    console.log("users written!!");
})
                
    
    
}) 
        
}) 