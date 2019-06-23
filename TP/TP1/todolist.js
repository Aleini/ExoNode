var express=require('express');

var app=express();

app.get('/todo',function(req,res){
    res.setHeader('Content-type','text/html');
    res.render('liste.ejs');
});

app.listen(8080);