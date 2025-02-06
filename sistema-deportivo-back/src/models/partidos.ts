import { DataTypes } from "sequelize";
import sequelize from "../db/connection";
import { Equipos } from "./equipos";

export const Partido = sequelize.define('partido',{
    idPartido:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    idEquipo:{
        type:DataTypes.STRING,
    },
    idEquipoContrario:{
        type:DataTypes.STRING,
    },
    fecha:{
        type:DataTypes.DATE
    },
    torneo:{
        type:DataTypes.STRING
    },
    sede:{
        type:DataTypes.STRING
    },
    arranque:{
        type:DataTypes.BOOLEAN
    },
    marcadorF:{
        type:DataTypes.INTEGER
    },
    marcadorC:{
        type:DataTypes.INTEGER
    },
    minuto:{
        type:DataTypes.INTEGER
    },
    ronda:{
        type:DataTypes.STRING
    }

    
},{
    timestamps: false,

  // If don't want createdAt
  createdAt: false,

  // If don't want updatedAt
  updatedAt: false,
})



// Relaciones
// Partido.belongsTo(Equipos, { as: 'Equipo', foreignKey: 'idEquipo' });
// Partido.belongsTo(Equipos, { as: 'EquipoContrario', foreignKey: 'idEquipoContrario' });