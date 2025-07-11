// function buyproduct(product_name ,cb ){
//     //do somthing asynchronous opertaion 
//     setTimeout(() => {
//        //all the operation completed 
//        console.log("all the i/o is completed and order detail ")
//        cd();

const { name } = require("ejs");


//     },0);
// }


// buyproduct("iphone 16", function (){
//     console.log("product purchased ")

// })



let product = [{
    name: "samsung ",
    amount: 70000,
    quantity: 0,
},
{
    name: "iphone 16",
    amount: 100000,
    quantity: 0
}]

function buyproduct(product_name, cb) {
    //do somthing asynchronous opertaion 
    let isproduct = product.filter((p) => p.name == product_name)[0];
    if (!isproduct) {
        return cb("product is not available ", null)
    }
    cb(null, isproduct.amount);

}
let availableamount = 200000
function deductbankamount(amount, cb) {
    if (amount > availableamount) {
        return cb("bank balance is low , null")
    }
    else {
        availableamount -= amount;
        cb(null, "amount deducted ");

        cb(null, "amount deducted ");

    }

}


buyproduct("iphone 16 ", function (err, amount) {
    // console.log("product purchased ")
    if (err) return console.log(err);
    console.log(amount);
    deductbankamount(amount, function (err, message) {
        if (err) return console.log(err)
        console.log(message);
    })


})


const fs = require("fs ");
fs.readfile("file path", "utf -8 ", function (err, data));

