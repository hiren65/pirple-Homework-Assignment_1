//dependencies
var http = require('http');
var router = require('./router');

//create server
http.createServer(function(req,res){
  router.hello(req,res);
  res.end("Welcome to node world");
}).listen(3000);

console.log("server is running on port 3000 !!!");
