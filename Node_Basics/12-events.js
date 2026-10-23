const event = require('events');

// subject 
const employee = new event.EventEmitter();

// listener / observers
employee.once("LogIn",()=>{
    console.log("Login succesfull");
});
employee.once("LogIn",()=>{
    console.log("database entry");
});

employee.once("LogOut",()=>{
    setTimeout(()=>{
        console.log("Logout Succesfull");
    },3000);

})

employee.emit("LogIn");
employee.emit("LogIn");
employee.emit("LogIn");

employee.emit("LogOut")
console.log("end of the program");