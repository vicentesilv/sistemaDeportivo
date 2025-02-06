import { Router } from "express";
import { getEquipo, getEquipos } from "../controllers/equipos";

const router = Router();

router.get('/mostrarEquipos',getEquipos)
router.get('/mostrarEquipo/:id',getEquipo)
// router.post('/buscarEquipo', /*validateToken*/ getBuscarEquipo);




export default router;