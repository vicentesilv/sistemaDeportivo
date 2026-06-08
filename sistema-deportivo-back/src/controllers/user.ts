import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { User, UserInstance } from "../models/user";
import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler";

export const newUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password: contrasena, nombre } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (user) {
    return res.status(400).json({
      msg: `Ya existe un usuario con el nombre ${email}`,
    });
  }

  const hashedPassword = await bcrypt.hash(contrasena, 10);

  try {
    await User.create({
      email: email,
      nombre: nombre,
      password: hashedPassword,
    });
    res.json({
      msg: `Usuario ${email} creado exitosamente!`,
    });
  } catch (error) {
    res.status(400).json({
      msg: "Error al crear el usuario",
    });
  }
});

export const loginUser = asyncHandler(async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } }) as UserInstance;

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
      id: user.id,
      email: user.email,
      nombre: user.nombre,
    },
    process.env.SECRET_KEY || "pepito123",
    {
      expiresIn: "1h",
    }
  );

  res.json(token);
});
