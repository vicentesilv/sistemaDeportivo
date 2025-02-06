import { Request, Response } from "express";
import { Jugadores } from "../models/jugadores";
import { Equipos } from "../models/equipos";

export const getJugadores = async (req:Request,res:Response) =>{
    const jugadores = await Jugadores.findAll(
        // attributes: ['idJugador', 'nombre', 'nacionalidad','posicion','img','idEquipo'], 
        // include: {
        //   model: Equipos,
        //   attributes: ['nEquipo'], 
        // },
    );
    res.json(jugadores)
}