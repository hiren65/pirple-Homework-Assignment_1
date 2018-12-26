var fs = require('fs');
//var content = require('./data1')
//creating hello function
function hello(req,res){
  var mysite = "www.hirenkumar.com.au";
  var username = req.url.replace("/","");
  if(username.length>0){
     if(username==="hello"){
      // res.writeHead(200,{'Content-Type':"text/plain"});
      // res.write("Hi guyies :: \n");

       //res.write(mysite +"\n");

       res.writeHead(200, {
                              'Content-Type': 'text/json',
                              'Access-Control-Allow-Origin': '*',
                              'X-Powered-By':'nodejs'
                          });
                /* define stringify */
                //var cc =       JSON.stringify(obj);
                var contents = fs.readFileSync("data1.json");
                res.write(contents);

                res.end("Thank you \n");
     }else {
       res.writeHead(404, {
                              'Content-Type': 'text/json',
                              'Access-Control-Allow-Origin': '*',
                              'X-Powered-By':'nodejs'
                          });
                /* define stringify */
                var ccNo =       JSON.stringify(noObj);

                res.write(ccNo);
     }

  }
};
  //var obj = {'key':'value'};
  var noObj = {'no' : 'not found'};
//exporting module
module.exports.hello = hello;
