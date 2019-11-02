const express = require('express'); // recuperando biblioteca do express
const app=express(); // executando a função que retorna do express
const consign=require("consign");
// consign => serve para compartilhar multiplos modulos de informações entre toda
// a aplicação do backend, ele vai ajuda a simplificar os arquivos entre todos os
//moduloes da exportação


// Recupera a função retornada do require
const Functions = require('../functions/functions');
// Recupera a função e executa retornado um objeto e atribuindo na propriedade do app abaixo.
app.Function=Functions();



/*
    A partir dessa função static do express, ele aplica já esse caminho
    a raíz da aplicação sem necessidade de botar todo caminho manualmente,
    com isso, ficando possível acesso a todos arquivos que ele contém, sendo
    que esses arquivos são estaticos. 
*/
app.use(express.static("./app/public"));


// Ele que vai tomar conta das view, por isso tem apontar
// pro express setando, nisso o ejs vai ser o motor das views
app.set("view engine","ejs");

/*
    Esse arquivo 'server.js' está sendo incluso no arquivo
    app.js, nisso o app.set terá que apontar no mesmo nivel
    onde está sendo chamado, como nesse caso
    o app.js esta mesmo nivel da pasta 'app', então tem que
    ser passado a rota como estivesse essas informações la.
*/
app.set("views","./app/views");

/*
    Só atribui o nome da pasta pro consign
    nisso ele já vai achar todos arquivos dentro
    e vai compartilhar com todos.
*/
consign()
.then("./middleweres")
.then("./app/routes")
.then("./config/dbMySQL.js")
.then("./app/models")
.then("./app/controllers")
.into(app);


module.exports=app;
