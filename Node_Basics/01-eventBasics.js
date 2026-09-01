const EventEmitter = require('events');// Common JS Syntax 

// Subject
const InstaInfluencer = new EventEmitter();

// Observer
InstaInfluencer.on('100k Follower',()=>{
    console.log("Congrat! buddy we are with you :)");
});

InstaInfluencer.on("Gone",(location)=>{
    if(location === "Russia"){
        console.log("Bring back vodaka");
    }
    else{
        console.log(
            'Happy Journy'
        );
    }
})


// Event Generation
InstaInfluencer.emit("100k Follower");
InstaInfluencer.emit("Gone","Russia");
InstaInfluencer.emit("Gone","US");


