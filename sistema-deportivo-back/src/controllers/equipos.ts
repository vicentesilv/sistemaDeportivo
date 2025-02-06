import { Request, Response } from "express";
import { Equipos } from "../models/equipos";

export const getEquipos = async (req: Request, res: Response) => {
  const listarUsuarios = await Equipos.findAll();
  res.json(listarUsuarios);
};
// export const getBuscarEquipo = async (req: Request, res: Response) => {
//   const { nombre: nombre } = req.body;
//   const equipo = await Equipos.findOne({ where: { nombre: nombre } });

//   if (equipo) {
//     res.json(equipo);
//   }
// };
export const getEquipo = async(req:Request,res:Response)=>{
  const {id} = req.params;
  const equipo = await Equipos.findByPk(id);

  if (equipo) {
    res.json(equipo)
  }else{
    res.status(404).json({
      msg: `el usuario con id ${id} no existe`
    })
  }
}