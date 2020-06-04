const http = require("http");

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Hi, I am the server");

};
const server = http.createServer(requestListener);
server.listen(8080);