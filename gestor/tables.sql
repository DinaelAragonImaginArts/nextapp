CREATE DATABASE agosback;

USE agosback; 

CREATE TABLE usuarios(
	id int auto_increment primary key, 
    usuario varchar(20),
    correo varchar(125) unique,
    pass varchar(30), 
    nombre varchar(60),
    apellido varchar(60),
    puesto varchar(30),
    activo binary default(1)
);