"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const goles_1 = require("../controllers/goles");
const router = (0, express_1.Router)();
router.get('/mostrarGoles', goles_1.getGoles);
exports.default = router;
