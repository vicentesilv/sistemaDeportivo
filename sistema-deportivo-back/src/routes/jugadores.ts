import { Router } from "express";
import { getJugadores } from "../controllers/jugadores";

const router = Router()

router.get('/mostrarJugadores',getJugadores)

export default router