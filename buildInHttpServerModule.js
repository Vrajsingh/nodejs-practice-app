const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 4000;
const hostname = "localhost";
const home = fs.readFileSync("./httpServer.html", "utf-8");

console.log(__dirname);

const server = http.createServer((req, res, next) => {
    if(req.url === "/") {
       return res.end(home);
    }
    if(req.url === "/about"){
        return res.end("<H1>ABOUT PAGE</H1>");
    }
    if(req.url === "/contact"){
       return res.end("<H1>CONTACT PAGE</H1>");
    }
    if(req.url === "/service") {
        return res.end("<H1>SERVICE PAGE</H1>");
    }
    else {
        return res.end("<H1>404 PAGE FOUND</H1>"); 
    }    
});

server.listen(PORT,hostname, ()=> {
    console.log(`Server is running on http://${hostname}:${PORT}`);
});