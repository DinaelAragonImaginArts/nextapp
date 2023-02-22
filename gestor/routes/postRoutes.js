import express from 'express';
import { crearPost, obtenerPost } from '../controllers/postsController.js';

//Iniciamos el router para obtener rutas
const router = express.Router();

//Buscamos post
router.get('/', obtenerPost);
router.post('/', crearPost);


export default router;