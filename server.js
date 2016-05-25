var express = require('express');
var app = express();
var bodyParser = require('body-parser');
//var pg = require('pg');
var cors = require('cors');
var port = process.env.PORT || 5000;
var mongoose = require('mongoose');//Es con lo que se conecta a mongo

var configDB = require('./config/database.js'); //llamamos al documento donde tenemos el url de la bd
mongoose.connect(configDB.url);//se hace la conexion a la bd

//Cadena de conexion
//var connectionString = process.env.DATABASE_URL || 'postgress://postgres:password@localhost:5432/preguntas';
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.set("view engine","jade");

var server = require('http').Server(app);//para que el servidor tenga los metodos http

require('./routes.js')(app, mongoose);//creamos esa ruta para tenerlos separados, se haran todos los post, get, etc. esos parametros es porque se utilizaran

//Conexion con base
//var pgClient = new pg.Client(connectionString);

/*Habilitar cors */
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function(req, res){
    res.send('Test');
});

server.listen(port, function(){
  console.log("Escuchando desde el puerto"+port);
});
