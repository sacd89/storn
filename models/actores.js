var mongoose = require("mongoose"); //Para utilizar mongoose
var Schema = mongoose.Schema; //Para utilizar schemas de mongoose,
var Pelicula = mongoose.model("Pelicula");//Extender del modelo peliculas para poder utilizar los campos del esquema

//colecciones = tablas
var actorSchema = new Schema({
  nombre:{type:String, required:true},
  edad:{type:Number},
  nacionalidad:{type:String},
  PeliculaReconocida:{type: Schema.ObjectId, ref: "Pelicula"}
});

var Actor = mongoose.model("Actor", actorSchema);// para poder utilizar el modelo en otros lados
module.exports = Actor;
