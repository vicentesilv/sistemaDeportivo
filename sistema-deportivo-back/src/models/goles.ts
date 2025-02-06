import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Jugadores } from "./jugadores";

export const Goles = sequelize.define('goles',{
    idGol:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    gol:{
        type:DataTypes.BOOLEAN
    },
    idJugador:{
        type:DataTypes.INTEGER
    },
    lugarTiro:{
        type:DataTypes.INTEGER
    }
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
})

// Goles.belongsTo(Jugadores, { foreignKey: 'idJugador' });
// Jugadores.hasMany(Goles, { foreignKey: 'idJugador' });