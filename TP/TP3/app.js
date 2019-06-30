var express = require('express');

var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);

var todolist = [];

app.use(express.static('statiques'))

.get('/todo',function(req,res){
    res.sendFile(__dirname + '/views/todo.html');
})

.use(function(req,res){
    res.redirect('/todo');
});

server.listen(8080);