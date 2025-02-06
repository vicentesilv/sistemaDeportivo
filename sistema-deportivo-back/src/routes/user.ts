import { Router } from 'express';
import {  actualizarUsuario, eliminarUsuario, getUsuario, getUsuarios, loginUser, newUser } from '../controllers/user';
import validateToken from './validate-token';

const router = Router();

router.get('/mostrar', /*validateToken*/ getUsuarios)
router.get('/:id', /*validateToken*/ getUsuario);
router.post('/', newUser);
router.post('/login', loginUser)
router.delete('/:id',eliminarUsuario);
router.put('/:id', actualizarUsuario);


export default router;