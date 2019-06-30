var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('./index.html', 'utf-8', function (error, content) {
        res.writeHead(200, { 'Content-type': 'text/html' });
        res.end(content);
    })
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    /*socket.on('new', function (pseudo) {
        socket.pseudo = pseudo;
        socket.broadcast.emit('message', socket.pseudo + ' vient de se connecter ');
    })*/

    socket.on('texte', function(texte){
        socket.broadcast.emit('retour', texte);
    });
});

server.listen(8080);