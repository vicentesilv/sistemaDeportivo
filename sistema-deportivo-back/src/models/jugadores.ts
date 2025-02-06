import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Equipos } from "./equipos";

export const Jugadores = sequelize.define('jugadores',{
    idJugador:{
        type: DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    nombre:{
        type: DataTypes.STRING,
        allowNull: false
    },
    nacionalidad:{
        type: DataTypes.STRING,
        allowNull: false
    },
    posicion:{
        type: DataTypes.STRING,
        allowNull: false
    },
    idEquipo:{
        type:DataTypes.STRING,
    },
    img:{
        type:DataTypes.STRING
    }
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
})

// Jugadores.belongsTo(Equipos, { foreignKey: 'idEquipo' });
// Equipos.hasMany(Jugadores, { foreignKey: 'idEquipo' });