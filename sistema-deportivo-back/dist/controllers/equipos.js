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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEquipo = exports.getEquipos = void 0;
const equipos_1 = require("../models/equipos");
const asyncHandler_1 = require("../utils/asyncHandler");
const pagination_1 = require("../utils/pagination");
exports.getEquipos = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limit, offset, page } = (0, pagination_1.getPagination)(req);
    const { rows, count } = yield equipos_1.Equipos.findAndCountAll({ limit, offset });
    res.json({ data: rows, total: count, page, totalPages: Math.ceil(count / limit) });
}));
exports.getEquipo = (0, asyncHandler_1.asyncHandler)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const equipo = yield equipos_1.Equipos.findByPk(id);
    if (equipo) {
        res.json(equipo);
    }
    else {
        res.status(404).json({
            msg: `el equipo con id ${id} no existe`
        });
    }
}));
