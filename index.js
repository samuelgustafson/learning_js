var express = require('express');
var server = express();
var port = 8080;
//this line is wiring up a sever power called express.static it allows the server to serve static files from a directory
 server.use(express.static(__dirname + '/public'));

 server.listen(port, function(){
   console.log('Now listening on port...', port);
 });
