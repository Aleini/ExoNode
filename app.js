var monmodule = require('module1');
var http = require('http');

var server = http.createServer(function(req,res){
    res.writeHead(200);
    res.end(monmodule.Bonjour);
});

server.on('close',monmodule.Aurevoir)

server.listen(8080);

server.close();