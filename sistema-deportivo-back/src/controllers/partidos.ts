import { Request, Response } from "express";
import { Equipos } from "../models/equipos";
import { Partido } from "../models/partidos";

export const getPartidos = async (req: Request, res: Response) => {
    const partidos = await Partido.findAll(
      // {
      //   attributes: [
      //     'idPartido',
      //     'fecha',
      //     'torneo',
      //     'sede',
      //     'arranque',
      //     'marcadorF',
      //     'marcadorC',
      //     'minuto',
      //     'ronda',
      //   ],
      //   include: [
      //     {
      //       model: Equipos,
      //       as: 'Equipo',
      //       attributes: ['nombre'], // Datos del equipo principal
      //     },
      //     {
      //       model: Equipos,
      //       as: 'EquipoContrario',
      //       attributes: ['nombre'], // Datos del equipo contrario
      //     },
      //   ],
      // }
      );
    res.json(partidos)
};