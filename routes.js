//Se extienden los modelos
var Pelicula = require('./models/peliculas');
var Actor = require('./models/actores');
var Director = require('./models/directores');

module.exports = function(app,  mongoose, cors){

  //-------------------------------PELICULAS---------------------------------//

  /*Metodo post para agregar peliculas a la base de datos, se crea una nueva
   pelicula, adentro se ponen los campos que tiene el modelo y con req.body
   obtenemos los datos ingresados en la vista.
  */
  app.post("/createPeliculas", function(req, res, next){
    var pelicula = new Pelicula({
      nombre: req.body.nombre,
      anio: req.body.anio,
      genero: req.body.genero,
      director: req.body.director,
      actorPpal: req.body.actorPpa
    });

    /*Verificamos si se guarda en la base de datos, si no se guardo nos envia
      un console.log con error, si se guarda nos renderisa la informacion en un
    json en consola.*/
    pelicula.save(function(err, obj){
      if(err){
        res.send(err);
      }else{
        res.send({message:'Pelicula creada con exito'});
      }
    });
  });

  /*Metodo get donde obtenemos todas las peliculas en la base de datos, sin
    filtro con el comando Pelicula.find({})*/
  app.get("/getPeliculas", function(req,res, next){
    Pelicula.find({})
    .exec(function(err, pelicula){
      if(err){
        res.send(err);
      }else{
        res.json(pelicula);
      }
    });
  });

  /*Metodo para modificar peliculas por su id*/
  app.put("/modificarPelicula/:idPelicula", function(req, res, next){
    Pelicula.findById(req.params.idPelicula, function(err, pelicula) {
      if (err){
        res.send(err);
      }else{
        pelicula.nombre = req.body.nombre;
        pelicula.anio = req.body.anio;
        pelicula.genero = req.body.genero;
        pelicula.director = req.body.director;
        pelicula.actorPpal = req.body.actorPpa;
      }

      // Guardamos la pelicula
      pelicula.save(function(err) {
        if (err) res.send(err);
        res.json({message:'Pelicula actualizada!'});
      });
    });
  });

  /*Metodo para eliminar peliculas por su id*/
  app.delete("/eliminarPelicula/:idPelicula", function(req, res, next){
    Pelicula.remove({_id: req.params.idPelicula}, function(err, pelicula) {
      if (err) res.send(err);
      res.json({message:'Pelicula eliminada con exito'});
    });
  });

//------------------------------------ACTORES----------------------------------

  /*Metodo para crear actores en la base de datos*/
  app.post("/createActores", function(req, res, next){
    var actor = new Actor({
      nombre: req.body.nombre,
      edad: req.body.edad,
      nacionalidad: req.body.nacionalidad
    });

    actor.save(function(err, obj){
      if(err){
        res.send(err);
      }else{
        res.send({message:'Actor creado con exito'});
      }
    });
  });

  /*Metodo para sacar los actores de la base de datos*/
  app.get("/getActores", function(req, res, next){
    Actor.find({})
    .exec(function(err, actor){
      if(err){
        res.send(err);
      }else{
        res.json(actor);
      }
    });
  });

  /*Metodo para modificar los actores por medio de su id*/
  app.put("/modificarActor/:idActor", function(req, res, next){
    Actor.findById(req.params.idActor, function(err, actor) {
      if (err){
        res.send(err);
      }else{
        actor.nombre = req.body.nombre;
        actor.edad = req.body.edad;
        actor.nacionalidad = req.body.nacionalidad;
      }

      // Guardamos el actor
      actor.save(function(err) {
        if (err) res.send(err);
        res.json({message:'Actor actualizada!'});
      });
    });
  });


  /*Metodo para eliminar actores mediante su id*/
  app.delete("/eliminarActor/:idActor", function(req, res, next){
    Actor.remove({_id: req.params.idActor}, function(err, actor) {
      if (err) res.send(err);
      res.json({message:'Actor eliminado con exito'});
    });
  });

//-----------------------------DIRECTORES-------------------------------------

  /*Metodo para agregar directores a la base de datos*/
  app.post("/createDirectores", function (req, res, next){
    var director = new Director({
      nombre: req.body.nombre,
      edad: req.body.edad,
      nacionalidad: req.body.nacionalidad
    });

    director.save(function(err, obj){
      if(err){
        res.send(err);
      }else{
        res.send({message:'Director creado con exito'});
      }
    });
  });

  /*Metodo para obtener los directores de la base de datos*/
  app.get("/getDirectores", function(req, res, next){
    Director.find({})
    .exec(function(err, director){
      if(err){
        res.send(err);
      }else{
        res.json(director);
      }
    });
  });

  /*Metodo para modificar a los directores mediante su id*/
  app.put("/modificarDirector/:idDirector", function(req, res, next){
    Director.findById(req.params.idDirector, function(err, director) {
      if (err){
        res.send(err);
      }else{
        director.nombre = req.body.nombre;
        director.edad = req.body.edad;
        director.nacionalidad = req.body.nacionalidad;
      }

      // Guardamos director
      actor.save(function(err) {
        if (err) res.send(err);
        res.json({message:'Director actualizada!'});
      });
    });
  });

  /*Metodo para eliminar director mediante su id*/
  app.delete("/eliminarDirector/:idDirector", function(req, res, next){
    Director.remove({_id: req.params.idDirector}, function(err, director) {
      if (err) res.send(err);
      res.json({message:'Director eliminado con exito'});
    });
  });

};
