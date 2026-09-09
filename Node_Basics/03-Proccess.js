const process= require('process'); // optional because it's global object

// //########################### Properties
console.log(`Proccess Architecture : ${process.arch}`);
console.log(`Proccess Arguments : ${process.argv}`);
console.log(`Proccess ENV : ${process.env}`);
console.log(`Proccess PID : ${process.pid}`);
console.log(`Proccess Versions : ${process.versions}`);

// setTimeout(()=>{
//     console.log("Waiting completed");
//     while(true){
//         console.log("fdfd");
//     }
// },5000);



//########################### Methods
console.log(process.cwd());
console.log(process.hrtime());
console.log(process.memoryUsage());

console.log(process.kill(process.argv[2]));