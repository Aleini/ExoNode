var mysql = require('mysql');

console.log('Get connection ...');

var conn = mysql.createConnection({
  database: 'geographieFrance',
  host: "localhost",
  user: "phpmyadmin",
  password: "1035@leX"
});

conn.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");

  var sql = "Select Region.NomRegion, Ville.NomVille FROM Region INNER JOIN Ville ON Ville.IdRegion=Region.IdRegion Where Ville.ChefLieuRegion IS TRUE";
  console.log("SQL=" + sql);

  conn.query(sql, function (err, rows, fields) {
    if (err) throw err;
    for (var i = 0; i < rows.length; i++) {
      console.log("  - Nom de la Région : " + rows[i].NomRegion);
      console.log("  - Nom de la Ville : " + rows[i].NomVille);
      console.log("\n");
    }
  });
});