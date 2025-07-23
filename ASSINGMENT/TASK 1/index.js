// assignment 
//Part-1
/* write data in file using fs module, but input data should be taken using terminal 
// process.argv is an array where inputs from terminal are stored.
*/

//ASSIGNMENT PART-1 WRITE DATA IN FILE USING FS MODULE BUT INPUT DATA SHOULD BE TAKEN USING TERMINAL.(GOOGLE ND LEARN FROM STACK OVERFLOW) PROCESS.argv is an array jisse input aate from terMinal store hote h 
const fs = require("fs");
process.argv.shift();
process.argv.shift();
// let input = process.argv.toString().replace(" ");
let input = process.argv.toString().replace(/,/g, " ");
fs.writeFile("data.txt", input, function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File saved");
    }
});
