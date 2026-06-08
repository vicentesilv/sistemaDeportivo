"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const partidos_1 = require("../controllers/partidos");
const router = (0, express_1.Router)();
router.get('/mostrarPartidos', partidos_1.getPartidos);
exports.default = router;
