import express, { Application } from 'express';
import cors from 'cors';
import routesUser from '../routes/user';
import routesEquipos from '../routes/equipos'
import routesGoles from '../routes/goles'
import routesPartidos from '../routes/partidos'
import routesJugadores from '../routes/jugadores'
import { User } from './user';
import { Goles } from './goles';
import { Partido } from './partidos';
import { Equipos } from './equipos';
import { Jugadores } from './jugadores';

class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.midlewares();
        this.routes();
        this.dbConnect();

    }

    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        })
    }

    routes() {
        this.app.use('/api/users', routesUser);
        this.app.use('/api/equipos',routesEquipos);
        this.app.use('/api/goles',routesGoles);
        this.app.use('/api/partidos',routesPartidos);
        this.app.use('/api/jugadores',routesJugadores);
    }

    midlewares() {
        // Parseo body
        this.app.use(express.json());
        // Cors
        this.app.use(cors());
    }

    async dbConnect() {
        try {
            await User.sync();
            await Goles.sync();
            await Partido.sync();
            await Equipos.sync();
            await Jugadores.sync();
        } catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
}

export default Server;