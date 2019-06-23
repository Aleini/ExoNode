var EventEmitter = require('events').EventEmitter;

var jeu = new EventEmitter();

jeu.on('nouveaujoueur', function(message){
    console.log(message);
});

jeu.emit('nouveaujoueur', 'Alex - 35 ans');