const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    if(req.url === "/api/users" && req.method === "GET"){
        fs.readFile("./users.csv",(err,data)=>{
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

    else if(req.url==="/api/users" && req.method==="POST"){
        let mydata = [];
        req.on('data',(chunk)=>{
            mydata.push(chunk);
        })
        req.on('end',()=>{
            // console.log(mydata.toString());
            const actualData = mydata.toString();
            const username = actualData.split('&').at(0).split('=').at(1);
            const password = actualData.split('&').at(1).split('=').at(1);

            console.log(username);
            console.log(password);

            // fs.writeFile('./users.csv',`${username},${password}`,(err)=>{
            //     if(err){
            //         console.log(err);
            //     }
            // })

            fs.appendFile('./users.csv',`\n${username},${password}`,(err)=>{
                if(err){
                    console.log(err);
                }
            })
        })

        res.write("Done");
        res.end();
    }
}).listen(8080);