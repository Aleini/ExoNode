var express = require('express');

var app = express();

/*app.get('/', function(req, res){
    res.setHeader('Content-type','text/html');
    res.send('Que puis-je faire pour vous ?');
});

app.get('/sous-sol', function(req, res){
    res.setHeader('Content-type','text/html');
    res.send('Vous êtes dans la cave à vins, ces bouteilles sont à moi !');
});*/

app.get('/etage/:etagenum/chambre', function(req, res){
    res.setHeader('Content-type','text/html');
    /*if(typeof(etagenum)==='number')
        res.send('Numéro de la chambre : ' + req.params.etagenum);
    else res.send('Vous devez rentrer un numéro de chambre');*/
    res.render('chambre.ejs',{etage:req.params.etagenum});
});

app.get('/compter/:nombre',function(req,res){
    var noms=['Robert','Marc','Alex'];
    res.render('noms.ejs',{compteur:req.params.nombre, noms:noms});
});

app.use(function(req,res, next){
    res.setHeader('Content-type','text/html');
    res.status(404).send('Page introuvable !');
});

app.listen(8080);