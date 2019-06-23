var http = require('http');
var url = require('url');
var querystring = require('querystring');

var server = http.createServer(function (req, res) {
    var params = querystring.parse(url.parse(req.url).query);
    res.writeHead(200, {
        'content-type': 'text/plain'
    });
    if ('prenom' in params && 'nom' in params) {
        res.write('Vous vous appelez ' + params['prenom'] + ' ' + params['nom']);
    } else {
        res.write('Vous devez bien avoir un prénom et un nom ?!');
    }
    res.end();
});
server.listen(8080);