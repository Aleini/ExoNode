var mysql = require('mysql');
var mysqlClient = mysql.createConnection({
    host: "localhost",
    user: "phpmyadmin",
    password:"1035@leX",
    database:"geographieFrance"
});

var Query = 'SELECT Ville.NomVille FROM Ville';

mysqlClient.query(
  Query,
  function select(error, results, fields) {
    if (error) {
      console.log(error);
      mySqlClient.end();
      return;
    }
      
    if ( results.length > 0 )  { 
      var firstResult = results[ 0 ];
      //console.log('id: ' + firstResult['id']);
      //console.log('label: ' + firstResult['label']);
      console.log('Nom de la ville : ' + firstResult['NomVille']);
    } else {
      console.log("Pas de données");
    }
    mySqlClient.end();
  }
);