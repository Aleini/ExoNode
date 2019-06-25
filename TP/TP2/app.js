var http=require('http');
var fs=require('fs');
var io = require('socket.io').listen(server);

var server = http.createServer(function(req,res){
    fs.readFile('./index.html','utf-8',function(error,content){
        res.writeHead(200,{'Content-type':'text/html'});
        res.end(content);
    })
});

io.sockets.on('connection', function (socket, pseudo) {
    // Dès qu'on nous donne un pseudo, on le stocke en variable de session et on informe les autres personnes
    socket.on('new', function(pseudo) {
        socket.pseudo = pseudo;
        socket.broadcast.emit('new', pseudo);
    });

    // Dès qu'on reçoit un message, on récupère le pseudo de son auteur et on le transmet aux autres personnes
    socket.on('message', function (message) {
        message = ent.encode(message);
        socket.broadcast.emit('message', {pseudo: socket.pseudo, message: message});
    }); 
});

server.listen(8080);