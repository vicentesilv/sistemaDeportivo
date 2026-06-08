import { Request, Response } from "express";
import { Jugadores } from "../models/jugadores";
import { asyncHandler } from "../utils/asyncHandler";

export const getJugadores = asyncHandler(async (req: Request, res: Response) => {
    const jugadores = await Jugadores.findAll();
    res.json(jugadores)
});
