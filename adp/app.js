var express = require('express')
var app = express()
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'yourpasswordhere',
  database: 'adp'

})
connection.connect()

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

app.get("/battles", function(req, res){
  connection.query('SELECT * from battles', function (err, rows, fields) {
  if (err) throw err  
  res.send(rows);  
  });
})

app.get("/kings", function(req, res){
  connection.query('SELECT attacker_king from battles union select defender_king from battles', function (err, rows, fields) {
  if (err) throw err  
  res.send(rows);  
  });
})

app.get("/BattleDetails", function(req, res){
  console.log(req.query.name);
  connection.query('SELECT * from battles where attacker_king ="'+ req.query.name + '" or defender_king= "'+req.query.name + '"', function (err, rows, fields) {
  if (err) throw err  
  res.send(rows);  
  });
})



app.get('/', function (req, res) {
  res.send('Game of Thrones !!')
})

app.listen(3000, function () {
  console.log('GOT APP listening on port 3000!')
})
