var http = require('http');
var url = require('url');

var server=http.createServer(function(req, res){
    var page = url.parse(req.url).pathname;
    if(page==='/') {
    res.writeHead(200,{'content-type':'text/html'});
    res.write('<! DOCTYPE html>' + 
    '<html>' + 
        '<head>' +
            '<meta charset="utf-8" />' +
            '<title>Ma page Node.js ! </title>' +
        '</head>' +
        '<boody>' +
            '<h1>Salut tout le monde</h1>' + 
            '<p>Voici un paragrape <strong> HTML </strong> ! </p>' +
        '</body>' +
    '</html>');
    } else if(page === '/mapage'){
        res.write('<h1>Ma page personnelle</h1><p> Circulez ! Y a rien à voir </p>');
    } else {
        res.writeHead(404,{'content-type':'text/html'});
        res.write("<p> La page demandée n'existe pas</p>");
    }
    res.end();
});
server.listen(8080);