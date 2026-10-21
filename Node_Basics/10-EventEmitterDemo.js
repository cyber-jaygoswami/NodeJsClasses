const Ev = require("events");

// Subject
const user = new Ev.EventEmitter();


// Listener / Observers
user.on("Register",()=>{
    console.log("All the values are correct");
});
user.on("Register",()=>{
    console.log("Db entry successful :)");
});
user.addListener("Register",()=>{
    console.log("Redirect to login page");
})

user.on("Login",()=>{
    console.log("Login failed");
})

// User click on Register button
user.emit("Register");

// User click on Login button
user.emit("Login");