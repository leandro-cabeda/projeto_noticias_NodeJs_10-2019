const bodyParser = require ('body-parser');
const cors = require ('cors'); // vai habilitar origens diferentes de requisição


const middlewereManual = () => {

  /*
    Quando executado e se não tiver retorno,
    o método abaixo não vai executar nada, apenas
    realizar mas não executar.
    Com retorno vai executar o método proposto 
    quando a função principal é executada
    retornando a execução do método abaixo.
  */
  return (req, res, next) => {
     console.log ('Antes de tudo: Meu middlewere...');
     next ();
   };
 };

module.exports = app => {

  /* retorno json nas requisições
    Isso faz que todas url das requisições sejam interpretada pela função
     json usando body-parser
  */
  app.use (bodyParser.json ()); 



  /*
    Isso permite que sejam implementado através de json
    as urls codificadas, permitindo uma tratativa mais completa
    de objetos e matrizes condificados em formato de url
  */
  app.use(bodyParser.urlencoded({
    extended:true
  }));
  

  app.use (
    cors ({
      origin: '*', // isso vai permitir a aplicação a requisição de qualquer origem
    })
  );


  // Adicionar cabeçalho no middlewere para todas rotas da aplicação
  //app.use((req, res, next)=>{
    //res.setHeader("Content-Type","application/json");
    //res.setHeader('content-type','text/html');
    //res.setHeader('content-type','text/plain');
    //res.setHeader("Content-Type","text/css");
    //res.setHeader("Content-Type","application/javascript");
    //res.setHeader("Content-Type","image/jpeg");
    //res.setHeader("Content-Type","image/png");

    // Website you wish to allow to connect
    // * é para todos
    //res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    //res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    //res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    //res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    //next();
//});


  /*
Aqui é uma rota manualmente criada 
no braço e podendo utilizar dentro
da variavel app.use
*/
  app.use (
    // Aqui executa a função e realiza o que está dentro
    middlewereManual ()
    );

};
