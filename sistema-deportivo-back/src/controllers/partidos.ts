import { Request, Response } from "express";
import { Partido } from "../models/partidos";
import { asyncHandler } from "../utils/asyncHandler";

export const getPartidos = asyncHandler(async (req: Request, res: Response) => {
    const partidos = await Partido.findAll();
    res.json(partidos)
});
