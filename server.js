// server.js
const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 5000;

const server = http.createServer((req,res)=>{
  let filePath = "";

  if (req.url === "/"){
    filePath = path.join(__dirname, "index.html");
  } else {
    filePath = path.join(__dirname, req.url);
  }
  const extname = path.extname(filePath);
  let contentType = "text/html";

  switch (extname) {
    case ".css":
      contentType = "text/css";
      break;
    case ".js":
      contentType = "text/javascript";
      break;
    case ".png":
      contentType = "image/png";
      break;
    case ".jpg":
      contentType = "image/jpg";
      break;
  }

  fs.readFile(filePath, (err, data)=>{
    if (err) {
      res.writeHead(404,{"Content-Type": "text/plain"});
      res.end("404 Not Found");
    } else {
      res.writeHead(200,{"Content-Type": contentType});
      res.end(data);
    }
  });
});

server.listen(PORT,()=>{
  console.log(`Server running at http://localhost:${PORT}`);
});