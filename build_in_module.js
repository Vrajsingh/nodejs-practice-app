const fs = require("fs");
const write_file = "This is my write file"

fs.readFile("./sample.txt", "utf-8", (err, data) => {
   if(err){
    throw err;
   }
   console.log(data);
});

console.log("I am first");   // I am async

fs.writeFile("./write_sample", write_file , () => {
    console.log("Written");
});



// fs, path, os