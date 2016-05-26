var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema;

//colecciones = tablas
var directorSchema = new Schema({
  nombre:String,
  edad:Number,
  nacionalidad:String
});

var Director = mongoose.model("Director", directorSchema);// para poder utilizar el modelo en otros lados
module.exports = Director;
