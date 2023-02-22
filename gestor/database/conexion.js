/*import mysql from 'mysql'

const conexion = mysql.createConnection({
    host: 'localhost',
    database: 'wordpress',
    user: 'root',
    password: 'root'
});

conexion.connect((error) => {
    if (error) {
      console.error('Error de conexión a la base de datos: ', error);
      return;
    }
    console.log('Conexión a la base de datos establecida');
  });


export default conexion;*/


import mongoose from 'mongoose';

const conn = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      }
    );
    const url = `${connection.connection.host}:${connection.connection.port}`
    console.log(`Mongodb conectado en: ${url}`);
    mongoose.set('strictQuery', false);
  } catch (error) {
    console.log(`error: ${error.message}`);
    process.exit(1);
  }
}

mongoose.set('strictQuery', true);

export default conn;