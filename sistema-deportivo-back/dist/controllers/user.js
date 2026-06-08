"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginUser = exports.newUser = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_1 = require("../models/user");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const asyncHandler_1 = require("../utils/asyncHandler");
exports.newUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password: contrasena, nombre } = req.body;
    const user = yield user_1.User.findOne({ where: { email: email } });
    if (user) {
        return res.status(400).json({
            msg: `Ya existe un usuario con el nombre ${email}`,
        });
    }
    const hashedPassword = yield bcrypt_1.default.hash(contrasena, 10);
    try {
        yield user_1.User.create({
            email: email,
            nombre: nombre,
            password: hashedPassword,
        });
        res.json({
            msg: `Usuario ${email} creado exitosamente!`,
        });
    }
    catch (error) {
        res.status(400).json({
            msg: "Error al crear el usuario",
        });
    }
}));
exports.loginUser = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const user = yield user_1.User.findOne({ where: { email: email } });
    if (!user) {
        return res.status(400).json({
            msg: `No existe un usuario con el nombre ${email} en la base datos`,
        });
    }
    const passwordValid = yield bcrypt_1.default.compare(password, user.password);
    if (!passwordValid) {
        return res.status(400).json({
            msg: `Password Incorrecta`,
        });
    }
    const token = jsonwebtoken_1.default.sign({
        id: user.id,
        email: user.email,
        nombre: user.nombre,
    }, process.env.SECRET_KEY || "pepito123", {
        expiresIn: "1h",
    });
    res.json(token);
}));
