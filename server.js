const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 4200;

const server = http.createServer((req, res)=>{
  console.log(req.url);
  if(req.url === '/'){
    fs.readFile("./public/index.html", (err, content)=>{
      if(err) throw err;
      res.writeHead(200, {"content-type" : "text/html"});
      res.end(content);
    });
  }
  if(req.url === '/src/index.css'){
    fs.readFile("./src/index.css", (err, content)=>{
      if(err) throw err;
      res.writeHead(200, {"content-type" : "text/css"});
      res.end(content);
    });
  }
  if(req.url === '/src/index.js'){
    fs.readFile("./src/index.js", (err, content)=>{
      if(err) throw err;
      res.writeHead(200, {"content-type" : "text/javascript"});
      res.end(content);
    });
  }
});

server.listen(PORT, (err)=>{
  if(err) throw err;
  console.log(`yo the server is running at port : ${PORT}`);
});