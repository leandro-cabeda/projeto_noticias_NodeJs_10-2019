module.exports.index=(application,req,res,next)=>{

    const ResultAjusteDataHora=application.Function.resultadoReajusteDataHora;

    const db=application.config.dbMySQL();

     new application.app.models.noticiasModels().get5UltimasNoticias (db, (err, result) => {

      //console.log(result);
      //console.log("-----------------------------------");
      //console.log("-----------------------------------");
     const resultado=ResultAjusteDataHora(result);
     //console.log(resultado);

        res.render ('home/index', {noticias: resultado});

      });

}