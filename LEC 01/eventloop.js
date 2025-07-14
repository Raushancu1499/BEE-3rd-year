const { rejects } = require("assert");
const fs = require("fs");
const { resolve } = require("path");
console.log("start");
setTimeout(()=>{
    console.log("timer call back ")
},0)
setImmediate(()=>{
    console.log("set immedaite call back ")
})
function dosometask(){
    return new Promise ((resolve,reject)=>{
        resolve("promise run ")
    })
    console.log("promisw chla ")
}
fs.readFile("demo.txt",(data)=>{
    console.log("poll phase call back ")
    setTimeout(()=>{
        console.log("timer 2 ")
    },0)
    setImmediate(()=>{
        console.log("immd 2 ")
    })
})
console.log("end ")
dosometask().then((res)=>{
    console.log(res);

})
.catch((err)=>{
    console.log("end ");
    
})