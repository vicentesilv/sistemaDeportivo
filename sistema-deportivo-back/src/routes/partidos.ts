import { Router } from "express";
import { getPartidos } from "../controllers/partidos";


const router = Router();

router.get('/mostrarPartidos',getPartidos)


export default router