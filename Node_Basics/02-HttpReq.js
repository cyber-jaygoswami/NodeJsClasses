const https = require('https');

const req= https.request("https://www.google.com",(res)=>{
    res.on('data',(chunk)=>{
        console.log(chunk.toString());
    })

    res.on('end',()=>{
        console.log("We got the data");
    })
});

req.end();