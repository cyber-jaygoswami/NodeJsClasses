const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    if(req.url === "/api/users" && req.method === "GET"){
        fs.readFile("./users_data.json",(err,data)=>{
            if(!err){
                res.setHeader('Content-Type','application/json');
                res.write(`${data}`);
                res.end();
            }
            else{
                res.write("Something went wrong");
                res.end();
            }
        })


    }
}).listen(8080);