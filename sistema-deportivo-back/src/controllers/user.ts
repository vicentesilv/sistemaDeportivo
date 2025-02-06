import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User } from "../models/user";
import jwt from "jsonwebtoken";

export const newUser = async (req: Request, res: Response) => {
  const {  email: email, password: contrasena, nombre: nombre } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${email}`,
    });
  }

  const hashedPassword = await bcrypt.hash(contrasena, 10);

  try {
    await User.create({
      // id: id,
      email: email,
      nombre: nombre,
      password: hashedPassword,
    });
    res.json({
      msg: `Usuario ${email} creado exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Upps ocurrio un error",
      error,
    });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  const { email: email, password, nombre, id } = req.body;
  const user: any = await User.findOne({ where: { email: email } });

  if (!user) {
    return res.status(400).json({
      msg: `No existe un usuario con el nombre ${email} en la base datos`,
    });
  }
  const passwordValid = await bcrypt.compare(password, user.password);
  if (!passwordValid) {
    return res.status(400).json({
      msg: `Password Incorrecta`,
    });
  }
  const token = jwt.sign(
    {
      id: id,
      email: email,
      nombre: nombre,
    },
    process.env.SECRET_KEY || "23050044",
    {
      expiresIn: "1h",
    }
  );

  res.json(token);
};
export const getUsuarios = async (req: Request, res: Response) => {
  const listarUsuarios = await User.findAll();

  res.json(listarUsuarios);
};
export const getUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    if (usuario) {
        res.json(usuario)
    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
}
export const eliminarUsuario = async (req: Request, res: Response) => {
    const { id } = req.params;
    const usuario = await User.findByPk(id);

    if (!usuario) {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}`
        })
    } else {
        await usuario.destroy();
        res.json({
            msg: 'El producto fue eliminado con exito!'
        })
    }

}


export const actualizarUsuario = async (req: Request, res: Response) => {
    const {  email: email, password: contrasena, nombre: nombre } = req.body;
    const { id } = req.params;

    try {

        const usuario = await User.findByPk(id);
        const hashedPassword = await bcrypt.hash(contrasena, 10);


    if(usuario) {
        await usuario.update({
            email: email,
            nombre: nombre,
            password: hashedPassword
        });
        res.json({
            msg: 'El usuario fue actualziado con exito'
        })

    } else {
        res.status(404).json({
            msg: `No existe un usuario con el id ${id}`
        })
    }
        
    } catch (error) {
        console.log(error);
        res.json({
            msg: `Upps ocurrio un error`
        })
    }
}