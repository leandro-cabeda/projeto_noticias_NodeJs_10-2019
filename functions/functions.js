// Validador de dados de requisição post
const { check, validationResult } = require('express-validator');

// Função que valida os campos vindo por post e verifica se estao de acordo
const ValidationCheckNoticias = () => {
  return [
    // Declara not().isEmpty() os campos definidos não poderão ser vazios
    // com os métodos disponiveis do express-validator.
    check('titulo',"Titulo é obrigatório").not().isEmpty(),
    check('resumo',"Resumo é obrigatório").not().isEmpty(),
    check('autor',"Autor é obrigatório").not().isEmpty(),
    check('data_noticia',"Data é obrigatório").not().isEmpty().toDate(),
    check('noticia',"Noticia é obrigatório").not().isEmpty(),

    // Declara isLength dizendo que o campo só aceita se
    // a quantidade de caractres tiver minimo 10 e maximo 100
    check('resumo',"Resumo tem que constar no minimo 10 e maximo 100 caracteres.")
    .isLength({ min: 10,max:100 }),
  ]
}

// Função que passa o parametro da requisição e retorna
const ValidationReq=req=>validationResult(req);

// Reajusta data e hora no retorno dos dados do banco
const resultadoReajusteDataHora=result=>{

  result.map(res=>{

      let dataCriacao= res.data_criacao.split(" ")[0];
      let dataHora=res.data_criacao.split(" ")[1];
      res.data_criacao="Data: "+dataCriacao+ "  Hora: "+dataHora;

      return res;
  
  });

  return result;

}

// Função que retorna um objeto com suas propriedades
const Functions=()=>{
  return {
    ValidationCheckNoticias,
    ValidationReq,
    resultadoReajusteDataHora
  }
}

// Exporta a função em si sem executar
module.exports=Functions;