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

const loginCheck = ()=>{
    console.log("Login Success");
}
const Redirect = ()=>{
    console.log("Redirect to home page");
}
const sendMail = ()=>{
    console.log("Mail send ");
}
user.on("Login",loginCheck);
user.on("Login",Redirect);
user.on("Login",sendMail);

// user.off("Login",sendMail);
// user.removeAllListeners("Login");



// User click on Register button
user.emit("Register");

// User click on Login button
user.emit("Login");


// user.on("FileUpload",(filename)=>{
//     console.log(`${filename} is uploaded to the server`);
// })


user.once("FileUpload",(filename)=>{
    console.log(`${filename} is uploaded to the server`);
})
user.emit("FileUpload","resume.pdf");
user.emit("FileUpload","resume2.pdf")

// const numberOfListner = user.listenerCount("Register");
const UserListners = user.listeners("Login");
console.log(UserListners);

console.log(user.eventNames());