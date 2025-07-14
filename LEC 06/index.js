let users =[
    {
        id :1,
        name :"nitesh",
        age : 24
    },{
        id :2,
        name:"ritik",
        age :16
    }
]  



function isallowed (id ){
    // id ka user dhundo 
    // fir uska age check  karo >18 
    // for(let i=0;i<users.length;i++){
    //     if(users[i].id===id && users[i].age>18){
    //         return users[i].name;
    //     }
    // }
    // return null;  
    // filter return new array 
    // let user =users.filter((u)=>{
    //     return u.id ==id 

    // })[0]
    // console.log(user );
    // if (!user) return console.log("no user found ")
    //     if (user.age>18) return  console.log("not eligible to vote ")
    //         return console.log("eligible to vote ")



     return new  Promise ((resolve , reject )=>{
         let user =users.filter((u)=>{
        return u.id ==id 

    })[0]
    console.log(user );
    if (!user) return  reject("no user found ")
        if (user.age<18) return  reject("not eligible to vote ")
            return resolve("eligible to vote ")

     })

     

}
  

isallowed(1).then((data)=>{
    console.log(data)
})
.catch((err)=>{
    console.log(err)
})
// console.log(isallowed(2));
