const http = require('http');


http.createServer((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    if(req.url == "/" && req.method == "GET"){
        res.setHeader("Content-Type","text/html");
        res.write('Admission Form');
        res.write(' <form method="post" action="/sendData">');
        res.write(' Name : <input type="text" name="Name">');
        res.write('Mobile No : <input type="text" name="mobile_no" id="">');
        res.write('Password : <input type="password" name="pass" id="">');
        res.write('<input type="submit" value="Submit">');
        res.write('</form>');

        res.end();
                       
    }
    else if(req.url == "/users" && req.method == "GET"){
        res.write('{"username" : "jay12","pass" : "cldlfee"}');
        res.end();
                       
    }
    else if(req.url == "/sendData" && req.method == "POST"){
        let userData = [];

        req.on('data',(chunck)=>{
            userData.push(chunck);
        })
        req.on('end',()=>{
            console.log("Full data received");
            console.log(userData);
            const data = Buffer.concat(userData).toString('utf-8');
            console.log(data);
        })
                       
    }
}).listen(8080);


