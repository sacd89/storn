var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema;
var Director = mongoose.model('Director');
//colecciones = tablas
var peliculaSchema = new Schema({
  nombre:{type:String, required:true},
  descripcion:{type:String},
  year:{type:Number, required:true},
  genero:{type:String, required:true},
  director:{type:Schema.ObjectId, ref:"Director"},
  actores:{type: Array, default:[]}
});

var Pelicula = mongoose.model("Pelicula", peliculaSchema);
module.exports = Pelicula;
