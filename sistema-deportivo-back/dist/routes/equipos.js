"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const equipos_1 = require("../controllers/equipos");
const router = (0, express_1.Router)();
router.get('/mostrarEquipos', equipos_1.getEquipos);
router.get('/mostrarEquipo/:id', equipos_1.getEquipo);
// router.post('/buscarEquipo', /*validateToken*/ getBuscarEquipo);
exports.default = router;
