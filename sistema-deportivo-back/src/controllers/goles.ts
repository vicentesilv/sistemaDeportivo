import { Request, Response } from "express";
import { Goles } from "../models/goles";
import { Jugadores } from "../models/jugadores";

export const getGoles = async (req:Request,res:Response) =>{
    const goles = await Goles.findAll(
      // {
      //   attributes: ['idGol', 'gol', 'lugarTiro'], 
      //   include: {
      //     model: Jugadores,
      //     attributes: ['nombre'], 
      //   },
      // }
      );

    res.json(goles)
}