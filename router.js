

//creating hello function
function hello(req,res){
  var mysite = "www.hirenkumar.com.au";
  var username = req.url.replace("/","");
  if(username.length>0){
     if(username==="hello"){
       res.writeHead(200,{'Content-Type':"text/plain"});
       res.write("Hi guyies :: \n");
       res.write(mysite +"\n");
       res.end("Thank you \n");
     }
  }
};

//exporting module
module.exports.hello = hello;
