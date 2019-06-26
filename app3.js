var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    fs.readFile('./index2.html', 'utf-8', function (error, content) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
    });
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
    console.log('Un client est connecté !');

    // Message à un client
    socket.emit('message', 'Vous êtes bien connecté !');

    // Message global à tous les clients
    socket.broadcast.emit('message', 'Un autre client vient de se connecter !');

    // On récupère le pseudo rentré sur la page HTML
    socket.on('petit_nouveau',function(pseudo){
        socket.pseudo=pseudo;
    })

    /*socket.on('message',function(message){
        console.log(socket.pseudo + ' me parle ! Il me dit : ' + message);
    })*/
});


server.listen(8080);