var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema;

//colecciones = tablas
var peliculaSchema = new Schema({
  nombre:{type:String, required:true},
  anio:{type:Number, required:true},
  genero:{type:String, required:true},
  director:{type:String},
  actorPpal:{type: String}
});

var Pelicula = mongoose.model("Pelicula", peliculaSchema);
module.exports = Pelicula;
