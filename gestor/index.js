//Paquetes y librerias
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

//documentos dentro de la api
//import conexion from './database/conexion.js';
import conn from './database/conexion.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();
conn();

//Abrimos express
const app = express();
app.use(express.json());
app.use(cors());
/*
let html = [];
//Creamos un query
conexion.query('SELECT * FROM wp_posts', (err, rows) => {
    if (err) throw err;
    html.push(rows);
  });
app.get('/', function (req, res){
    res.send(html);
});*/
app.use('/post', postRoutes);



app.listen(4000);