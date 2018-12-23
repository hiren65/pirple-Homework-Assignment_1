//dependencies
var http = require('http');


//create server
http.createServer(function(req,res){

  res.end("Welcome to node world");
}).listen(3000);

console.log("server is running on port 3000 !!!");
