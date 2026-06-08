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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const morgan_1 = __importDefault(require("morgan"));
const user_1 = __importDefault(require("../routes/user"));
const equipos_1 = __importDefault(require("../routes/equipos"));
const goles_1 = __importDefault(require("../routes/goles"));
const partidos_1 = __importDefault(require("../routes/partidos"));
const jugadores_1 = __importDefault(require("../routes/jugadores"));
const user_2 = require("./user");
const goles_2 = require("./goles");
const partidos_2 = require("./partidos");
const equipos_2 = require("./equipos");
const jugadores_2 = require("./jugadores");
const connection_1 = __importDefault(require("../db/connection"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = process.env.PORT || '3001';
        this.listen();
        this.middlewares();
        this.routes();
        this.errorHandler();
        this.dbConnect();
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log('Aplicacion corriendo en el puerto ' + this.port);
        });
    }
    routes() {
        this.app.use('/api/users', user_1.default);
        this.app.use('/api/equipos', equipos_1.default);
        this.app.use('/api/goles', goles_1.default);
        this.app.use('/api/partidos', partidos_1.default);
        this.app.use('/api/jugadores', jugadores_1.default);
        this.app.get('/api/health', (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                yield connection_1.default.authenticate();
                res.json({ status: 'ok', db: 'connected' });
            }
            catch (_a) {
                res.status(503).json({ status: 'error', db: 'disconnected' });
            }
        }));
    }
    middlewares() {
        this.app.use((0, morgan_1.default)('dev'));
        this.app.use(express_1.default.json());
        this.app.use((0, cors_1.default)());
    }
    errorHandler() {
        this.app.use((err, req, res, next) => {
            console.error('Error:', err.message);
            res.status(500).json({
                msg: 'Error interno del servidor'
            });
        });
    }
    dbConnect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_2.User.sync();
                yield goles_2.Goles.sync();
                yield partidos_2.Partido.sync();
                yield equipos_2.Equipos.sync();
                yield jugadores_2.Jugadores.sync();
            }
            catch (error) {
                console.error('Unable to connect to the database:', error);
            }
        });
    }
}
exports.default = Server;
