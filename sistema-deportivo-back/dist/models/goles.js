"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Goles = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Goles = connection_1.default.define('goles', {
    idGol: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    gol: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    idJugador: {
        type: sequelize_1.DataTypes.INTEGER
    },
    lugarTiro: {
        type: sequelize_1.DataTypes.INTEGER
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
// Goles.belongsTo(Jugadores, { foreignKey: 'idJugador' });
// Jugadores.hasMany(Goles, { foreignKey: 'idJugador' });
