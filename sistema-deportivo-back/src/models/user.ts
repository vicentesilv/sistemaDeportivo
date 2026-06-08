import { DataTypes, Model } from 'sequelize';
import sequelize from '../db/connection';

export interface UserInstance extends Model {
  id: number;
  email: string;
  nombre: string;
  password: string;
}

export const User = sequelize.define<UserInstance>('usuarios', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, )