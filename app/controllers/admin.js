// Module exports suporta atribuir atributos como propriedades
module.exports.formulario_inclusao_noticia=(application,req,res,next)=>{

    res.render ('admin/form_add_noticia',{validacao:[],noticia:{} });
}

module.exports.noticias_salvar=(application,req,res,next)=>{

    // Recupera as propriedades do objeto para depois tratar nas requisições das rotas
    const ValidationReq=application.Function.ValidationReq;

    const noticia= req.body;
    //console.log(noticia);


    // Retorna um objeto com duas propriedades, 
    // uma delas é 'errors', um array de objetos com valores
    const erros=ValidationReq(req);

    // Verifica se os erros não retornaram vazios ai barra já.
    if(!erros.isEmpty())
    {

     return res.render ('admin/form_add_noticia',{validacao:erros.errors,noticia});
    }

    const db=application.config.dbMySQL();
    new application.app.models.noticiasModels().salvarNoticia(db,noticia,(err, result) => {

      res.redirect("/noticias");

    });
    
}