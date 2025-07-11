// let p= new Promise ((resolve , reject )=>{
//     resolve(" wada pura kiya ") 
// })
// console.log(p);

// p.then((data)=>{
//     console.log(data )
// }
// )

// .catch ((err)=>{
//     console.log(err)
// })


function buyproduct(product_name  ){

     return new Promise((resolve ,reject )=>{
    //do somthing asynchronous opertaion 
      let isproduct= product.filter((p)=>p.name==product_name)[0];
      if (!isproduct){
        return reject("product is not available ",null)
      }
      resolve (null, isproduct.amount);
    })
}


buyproduct("iphone 16 ").then((amount)=>{
    console.log(amount)
})

.catch ((err)=>{
    console.log(err)
})