var http = require('http');


http.createServer(function(req, res){

 res.end('Hello World, welcome to my server')

}).listen(8081);

console.log('O Servidor estah rodando ! ');