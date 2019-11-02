
/*
    Para poder criar propriedades dentro de função
    como fosse uma classe em orientação objeto
    padrão das maiorias, utiliza-ze prototype, porém
    não funciona se a função estiver sendo recebida
    a uma variável como no exemplo abaixo:

    const Noticias=()=>{

    }

    Só funciona atribuindo como 'function' mesmo
    na frente e atribuindo o nome.
*/
function Noticias(){
    
}

Noticias.prototype.getNoticias=(db,callback) =>
{
    db.query ('select *,'+
    'DATE_FORMAT(data_criacao,"%d/%m/%Y %H:%i:%s") as data_criacao,'+
    ' DATE_FORMAT(data_noticia,"%d/%m/%Y") as data_noticia'+
    ' from noticias order by id desc',callback);
}

Noticias.prototype.getNoticia=(db,id,callback) =>
{
    db.query ('select *, DATE_FORMAT(data_criacao,"%d/%m/%Y %H:%i:%s") as data_criacao,'+
    ' DATE_FORMAT(data_noticia,"%d/%m/%Y") as data_noticia'+
    ' from noticias where id='+id,callback);
}

Noticias.prototype.removeNoticia=(db,id,callback) =>
{
    db.query ('delete from noticias where id='+id,callback);
}

Noticias.prototype.get5UltimasNoticias=(db,callback) =>
{
    db.query ('select *, DATE_FORMAT(data_criacao,"%d/%m/%Y %H:%i:%s") as data_criacao,'+
    ' DATE_FORMAT(data_noticia,"%d/%m/%Y") as data_noticia'+
    ' from noticias order by id desc limit 5',callback);
}

Noticias.prototype.salvarNoticia=(db,noticia,callback) =>
{
    //console.log(noticia);
    const id=noticia.id;

    // Remove a propriedade do objeto e com isso ela não existe mais.
    delete noticia.id;
    /*
         Em MySQL, ele suporte o json vindo por parametros
        Podendo subtituir o interrogação nos valores que será
        atribuido na tabela.

        Obs: É fundamental que o Json possua
        como rótulo das variaveis o mesmo nome
        que as colunas da tabela.
    */

   // Se id vier vazio vai inserir caso contrario vai atualizar
   if (id==""){
        db.query ('insert into noticias set ? ',noticia,callback);
   }else{
        db.query ('update noticias set ? where id='+id,noticia,callback);
   }

}

/*
Exportando uma função que retorna uma função,
só assim para poder utilizar os métodos
atribuidos dentro dela.

*/
module.exports=() => Noticias;