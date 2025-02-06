import { Router } from "express";
import { getGoles } from "../controllers/goles";


const router = Router();

router.get('/mostrarGoles',getGoles)


export default router