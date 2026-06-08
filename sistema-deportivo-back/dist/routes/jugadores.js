"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const jugadores_1 = require("../controllers/jugadores");
const router = (0, express_1.Router)();
router.get('/mostrarJugadores', jugadores_1.getJugadores);
exports.default = router;
