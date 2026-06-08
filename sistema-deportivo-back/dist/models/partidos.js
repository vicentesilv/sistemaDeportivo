"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Partido = void 0;
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
exports.Partido = connection_1.default.define('partido', {
    idPartido: {
        type: sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    idEquipo: {
        type: sequelize_1.DataTypes.STRING,
    },
    idEquipoContrario: {
        type: sequelize_1.DataTypes.STRING,
    },
    fecha: {
        type: sequelize_1.DataTypes.DATE
    },
    torneo: {
        type: sequelize_1.DataTypes.STRING
    },
    sede: {
        type: sequelize_1.DataTypes.STRING
    },
    arranque: {
        type: sequelize_1.DataTypes.BOOLEAN
    },
    marcadorF: {
        type: sequelize_1.DataTypes.INTEGER
    },
    marcadorC: {
        type: sequelize_1.DataTypes.INTEGER
    },
    minuto: {
        type: sequelize_1.DataTypes.INTEGER
    },
    ronda: {
        type: sequelize_1.DataTypes.STRING
    }
}, {
    timestamps: false,
    // If don't want createdAt
    createdAt: false,
    // If don't want updatedAt
    updatedAt: false,
});
// Relaciones
// Partido.belongsTo(Equipos, { as: 'Equipo', foreignKey: 'idEquipo' });
// Partido.belongsTo(Equipos, { as: 'EquipoContrario', foreignKey: 'idEquipoContrario' });
