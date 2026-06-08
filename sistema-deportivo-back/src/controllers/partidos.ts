import { Request, Response } from "express";
import { Partido } from "../models/partidos";
import { asyncHandler } from "../utils/asyncHandler";
import { getPagination } from "../utils/pagination";

export const getPartidos = asyncHandler(async (req: Request, res: Response) => {
    const { limit, offset, page } = getPagination(req);
    const { rows, count } = await Partido.findAndCountAll({ limit, offset });
    res.json({ data: rows, total: count, page, totalPages: Math.ceil(count / limit) });
});
