const http = require('http');

const reqListener = (req, res) => {
    // console.log(req.url);

    if (req.url === "/Home") {
        res.write("<h1>Hello World</h1>");
        res.end();
    }
    else if (req.url === "/Users"){
        res.write("<h1>List of Users </h1>");
        res.write("<ol> <li>Jay</li><li>Ajay</li></ol>");
        res.end();
    }
    else{
        res.write("<h1>Go to Home page</h1>");
        res.write("<a href='http://localhost:8080/Home'>Home</a>");
        res.end();
    }

}
const server = http.createServer(reqListener);

server.listen(8080); // Event Loop

console.log(process.pid);
// process.exit();

