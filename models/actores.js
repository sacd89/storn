var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var actorSchema = new Schema({
    nombre:{type:String},
    nacionalidad:{type:String},
    edad:{type:Number}
});


var Actor = mongoose.model("Actor", actorSchema);
module.exports = Actor;
