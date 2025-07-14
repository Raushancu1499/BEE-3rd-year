const fs = require ("fs")
console.log(fs)
console.log( "hi ")


fs.readFile("demo.txt", utf-8, (data)=>{
    console.log(data)
})




function add(a,b){
    return a+b
}
function sub(a,b){
    return a-b
}
function multiply (a, b){
    return a*b
}
add  (2,3);
sub(5,6);
multiply(5,6);
console.log("exit ")
