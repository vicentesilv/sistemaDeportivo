import { Request, Response } from "express";
import { Equipos } from "../models/equipos";
import { asyncHandler } from "../utils/asyncHandler";
import { getPagination } from "../utils/pagination";

export const getEquipos = asyncHandler(async (req: Request, res: Response) => {
  const { limit, offset, page } = getPagination(req);
  const { rows, count } = await Equipos.findAndCountAll({ limit, offset });
  res.json({ data: rows, total: count, page, totalPages: Math.ceil(count / limit) });
});

export const getEquipo = asyncHandler(async (req: Request, res: Response) => {
  const {id} = req.params;
  const equipo = await Equipos.findByPk(id);

  if (equipo) {
    res.json(equipo)
  }else{
    res.status(404).json({
      msg: `el equipo con id ${id} no existe`
    })
  }
});
