import { Request, Response } from "express";
import { Goles } from "../models/goles";
import { asyncHandler } from "../utils/asyncHandler";

export const getGoles = asyncHandler(async (req: Request, res: Response) => {
    const goles = await Goles.findAll();
    res.json(goles)
});
