const event = require("events");

function createEvent(){
    const ev = new event.EventEmitter();
    setTimeout(()=>{
        ev.emit("completed");
    },5000);
    return ev;
}


const fileUpload = createEvent();

fileUpload.on("completed",()=>{
    console.log("File upload completed");
})

