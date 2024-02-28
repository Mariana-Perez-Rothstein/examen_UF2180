drop database if exists `UF2180`;
create database `UF2180`;
use `UF2180`;

create table Usuari(
	id int primary key auto_increment,
    contrasenya varchar(255)
);


select * from Usuari
