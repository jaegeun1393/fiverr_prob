const mysql = require('mysql2');

/*
var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'minfarm_mmtwebsite',
  password: '{?LREcI=dEtD',
  database: 'minfarm_mmtwebsite'
});
*/

var db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'hunter2',
  database: 'mmt_website'
});

  db.connect(function (err) {
    if(err){
        console.log(err)
    }
  });
  module.exports = db;
  