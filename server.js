const http = require("http");
const fs = require("fs");

const PORT = process.env.PORT || 4200;

const server = http.createServer((req, res)=>{
  if(req.url === '/'){
    fs.readFile("./public/index.html", (err, content)=>{
      if(err) throw err;
      res.writeHead(200, {"content-type" : "text/html"});
      res.end(content);
    });
  }
});

server.listen(PORT, (err)=>{
  if(err) throw err;
  console.log(`yo the server is running at port : ${PORT}`);
});