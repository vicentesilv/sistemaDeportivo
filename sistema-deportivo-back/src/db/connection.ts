import { Sequelize } from "sequelize";


const sequelize = new Sequelize('sistemaDeportivo', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',   
});

export default sequelize;