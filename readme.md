## Recursos utilizado para recarregar as mudanças na aplicação do NodeJs
Nodemon


## SQL cricação do banco de dados no MySQL

create table noticias(
id int not null primary key auto_increment,
titulo varchar(100),
noticia text,
data_criacao timestamp default current_timestamp

);

alter table noticias add column resumo varchar(100);
alter table noticias add column autor varchar(30);
alter table noticias add column data_noticia date;