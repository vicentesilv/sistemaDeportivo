import { Request, Response } from "express";
import { Equipos } from "../models/equipos";
import { asyncHandler } from "../utils/asyncHandler";

export const getEquipos = asyncHandler(async (req: Request, res: Response) => {
  const listarUsuarios = await Equipos.findAll();
  res.json(listarUsuarios);
});

export const getEquipo = asyncHandler(async (req: Request, res: Response) => {
  const {id} = req.params;
  const equipo = await Equipos.findByPk(id);

  if (equipo) {
    res.json(equipo)
  }else{
    res.status(404).json({
      msg: `el usuario con id ${id} no existe`
    })
  }
});
