const fs =require('fs');

console.log("Start reading file");

// Non blocking
// fs.readFile("./user.txt",(err,data)=>{
//     if(!err){
//         console.log(`Data :\n${data}`);
//     }
//     else{
//         console.log(err.toString());
//     }
// })


// Blocking
const data  =fs.readFileSync("./user.txt");
console.log(data.toString());

console.log("File reading completed");