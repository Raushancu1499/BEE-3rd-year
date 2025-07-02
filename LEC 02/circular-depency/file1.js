   const file2=require("./file2");
   console.log(file2);

  
  function sum(a,b){
    return a+b
}
function sub (a,b ){
    return a-b
}


module.exports= { // first way 
    sum ,sub 
}


// module.exports.sum=sum;
// module.exports.sub=sub;
