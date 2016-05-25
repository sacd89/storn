var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema; //Para utilizar schemas de mongoose
var Pelicula = mongoose.model("Pelicula");

//colecciones = tablas
var directorSchema = new Schema({
  nombre:{type:String, required:true},
  peliculaReconocida:{type: Schema.ObjectId, ref:"Pelicula"}//vendria siendo la llave foranea
});

var Director = mongoose.model("Director", directorSchema);// para poder utilizar el modelo en otros lados
module.exports = Director;
