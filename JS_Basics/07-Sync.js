const fs = require('fs');

const filePath = "./demo.txt";
const result = fs.readFileSync(filePath,{encoding: 'utf-8'}); // Blocking Code



console.log(result);
console.log("Hello ");
console.log("Hello again");



