const fs = require("fs");
// since function is asynochrouns so we have used nested loop avoid the race condition .
fs.readFile("./1.txt", "utf-8", function (err, data1) {
    if (err) return console.log(err);
fs.readFile("./2.txt", "utf-8", function (err, data2) {
    if (err) return console.log(err);
fs.writeFile("./task.txt", data1 + "\n " + data2, function (err) {
    if (err) return console.log(err);
    console.log("sucess write ");

    
})
})
})


