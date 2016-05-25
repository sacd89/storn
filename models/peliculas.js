var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema; //Para utilizar schemas de mongoose
var Director = mongoose.model('Director');
var Actor = mongoose.model('Actor');

//colecciones = tablas
var peliculaSchema = new Schema({
  nombre:{type:String, required:true},
  anio:{type:Number, required:true},
  genero:{type:String, required:true},
  director:{type: Schema.ObjectId, ref:"Director"},
  actores:{type: Schema.ObjectId, red:"Actor"}
});

var Pelicula = mongoose.model("Pelicula", peliculaSchema);// para poder utilizar el modelo en otros lados
module.exports = Pelicula;
