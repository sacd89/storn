var Pelicula = require('./models/peliculas');
var Actor = require('./models/actores');
var Director = require('./models/directores');

module.exports = function(app,  mongoose){
  app.get("/",function(req,res){
    res.render("index");
  });

  /*Metodo post para agregar peliculas a la base de datos, se crea una nueva
   pelicula, adentro se ponen los campos que tiene el modelo y con req.body
   obtenemos los datos ingresados en la vista.
  */
  app.post("/createPeliculas/:idActor/:idDirector", function(req, res){
    var pelicula = new Pelicula({
      nombre: req.body.nombre,
      anio: req.body.anio,
      genero: req.body.genero
    });

    /*Verificamos si se guarda en la base de datos, si no se guardo nos envia
      un console.log con error, si se guarda nos renderisa la informacion en un
    json en consola.*/
    pelicula.save(function(err, obj){
      if(err){
        console.log("No se han guardado los datos");
      }else{
        console.log(res.json(obj));
      }
    });
  });

  /*Metodo get donde obtenemos todas las peliculas en la base de datos, sin
    filtro con el comando Pelicula.find({})*/
  app.get("/getPeliculas", function(req,res){
    Pelicula.find({})
    .exec(function(err, pelicula){
      if(err){
        console.log("No se obtuvieron las peliculas");
      }else{
        console.log(res.json(pelicula));
      }
    });
  });

  app.post("/createActores", function(req, res){
    var actor = new Actor({
      nombre: req.body.nombre,
      edad: req.body.edad,
      nacionalidad: req.body.nacionalidad
    });

    actor.save(function(err, obj){
      if(err){
        console.log("VAlio kk");
      }else{
        console.log(res.json(obj));
      }
    });
  });

  app.get("/getActores", function(req, res){
    Actor.find({})
    .exec(function(err, actor){
      if(err){
        console.log("No se obtuvieron los actores");
      }else{
        console.log(res.json(actor));
      }
    });
  });

  app.post("/createDirectores", function (req, res){
    var director = new Director({
      nombre: req.body.nombre,
      peliculaReconocida: req.body.peliculaReconocida
    });

    director.save(function(err, obj){
      if(err){
        console.log("VAlio kk");
      }else{
        console.log(res.json(obj));
      }
    });

    app.get("/getDirectores", function(req, res){
      Director.find({})
      .exec(function(err, director){
        if(err){
          console.log("No se obtuvieron los directores");
        }else{
          console.log(res.json(director));
        }
      });
    });

  });

  app.get("");


};
