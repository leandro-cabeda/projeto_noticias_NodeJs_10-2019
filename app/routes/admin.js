
module.exports = application => {

  // Recupera as propriedades do objeto para depois tratar nas requisições das rotas
  const ValidationCheckNoticias=application.Function.ValidationCheckNoticias;

  application.get ('/formulario_inclusao_noticia',(req, res, next) => {

    application.app.controllers.admin.formulario_inclusao_noticia(application,req,res,next);

  });


  application.post ('/noticias/salvar',ValidationCheckNoticias(), (req, res, next) => {

    application.app.controllers.admin.noticias_salvar(application,req,res,next);
    
  });

};
