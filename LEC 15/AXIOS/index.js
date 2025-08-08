// function to get comments data 



 console.log(axios);
 async function getcomments(URL){
// how to send get request usinf axios 

  try {let commentdata=await axios.get(URL)
 console.log(commentdata);

}

getcomments("https://jsonplaceholder.typicode.com/comments")
