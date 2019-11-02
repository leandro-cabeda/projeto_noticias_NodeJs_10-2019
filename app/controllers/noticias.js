module.exports.noticias=(application,req,res,next)=>{

  const ResultAjusteDataHora=application.Function.resultadoReajusteDataHora;
     /*
      Duas maneiras que pode ser feitas
      1) Utiliza a palavra 'new' para dar uma nova instancia no modulo
       com isso não precisa se preocupar se os valores dentro
       do modulo estão sendo sobreescrito por algum motivo.

      2) Pode utilizar direto podendo ter palavra
      'new' na frente, e antes do método da função selecionado
      executar a função e depois o nome do método, 
      pois como exporta uma função, 
      precisa executar como exemplo abaixo:

      new application.app.models.noticiasModels().getNoticias

    */

    // 1) Maneira funcionando.

    /*
    const appGetNoticias= new application.app.models.noticiasModels;

    appGetNoticias.getNoticias(application,(err, result) => {
      res.render ('noticias/noticias', {noticias: result});
    });
    
    */


   const db=application.config.dbMySQL();
   // 2) Maneira funcionando.
   new application.app.models.noticiasModels().getNoticias(db,(err, result) => {

     //console.log(result);
   const resultNoticias=ResultAjusteDataHora(result);

     res.render ('noticias/noticias', {noticias: resultNoticias});

   });
 
}


module.exports.noticia=(application,req,res,next)=>{

    const ResultAjusteDataHora=application.Function.resultadoReajusteDataHora;

    // Recupera o objeto json passado por 
    // parametro na url com a propriedade que foi definida
    const id=req.query.id;
    const editar=req.query.acao?req.query.acao:null;
    //console.log(editar);
    
    const db=application.config.dbMySQL();
     new application.app.models.noticiasModels().getNoticia (db,id, (err, result) => {

      //console.log(result);
     const resultNoticia=ResultAjusteDataHora(result);

     if(editar==null){
        res.render ('noticias/noticia', {noticia: resultNoticia});
     }else{
      const resultObjeto={};
      resultObjeto.id=resultNoticia[0].id;
       resultObjeto.autor=resultNoticia[0].autor;
       resultObjeto.titulo=resultNoticia[0].titulo;
       resultObjeto.resumo=resultNoticia[0].resumo;

       resultObjeto.data_noticia=resultNoticia[0].data_noticia.split("/")[2]+"-"+
       resultNoticia[0].data_noticia.split("/")[1]+"-"+resultNoticia[0].data_noticia.split("/")[0];

       resultObjeto.noticia=resultNoticia[0].noticia;
  
        res.render ('admin/form_add_noticia',{validacao:{},noticia:resultObjeto});
     }

      });

}


module.exports.excluirNoticia=(application,req,res,next)=>{

  // Recupera o objeto json passado por 
  // parametro na url com a propriedade que foi definida
  const id=req.query.id;
  
  const db=application.config.dbMySQL();

   new application.app.models.noticiasModels().removeNoticia (db,id, (err, result) => {
 
    res.redirect("/noticias");

  });

}