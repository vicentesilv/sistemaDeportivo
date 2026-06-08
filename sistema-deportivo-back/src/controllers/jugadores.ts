import { Request, Response } from "express";
import { Jugadores } from "../models/jugadores";
import { asyncHandler } from "../utils/asyncHandler";
import { getPagination } from "../utils/pagination";

export const getJugadores = asyncHandler(async (req: Request, res: Response) => {
    const { limit, offset, page } = getPagination(req);
    const { rows, count } = await Jugadores.findAndCountAll({ limit, offset });
    res.json({ data: rows, total: count, page, totalPages: Math.ceil(count / limit) });
});
