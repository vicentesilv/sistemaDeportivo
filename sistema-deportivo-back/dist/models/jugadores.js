"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jugadores = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Jugadores = connection_1.default.define('jugadores', {
    idJugador: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    nacionalidad: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    posicion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    idEquipo: {
        type: sequelize_1.DataTypes.STRING,
    },
    img: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
// Jugadores.belongsTo(Equipos, { foreignKey: 'idEquipo' });
// Equipos.hasMany(Jugadores, { foreignKey: 'idEquipo' });
