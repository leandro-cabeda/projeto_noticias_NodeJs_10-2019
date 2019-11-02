
module.exports = application => {


  application.get ('/noticias', (req, res, next) => {

    application.app.controllers.noticias.noticias(application,req,res,next);
  
  });

  application.get ('/noticia',(req, res, next) => {

    application.app.controllers.noticias.noticia(application,req,res,next);
  
  });


  application.get ('/noticia/excluir', (req, res, next) => {

    application.app.controllers.noticias.excluirNoticia(application,req,res,next);
  
  });

};
