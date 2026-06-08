"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const user_1 = require("../controllers/user");
const router = (0, express_1.Router)();
const validateFields = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    next();
};
router.post('/', (0, express_validator_1.body)('email').isEmail().withMessage('Email inválido'), (0, express_validator_1.body)('nombre').notEmpty().withMessage('Nombre es requerido'), (0, express_validator_1.body)('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'), validateFields, user_1.newUser);
router.post('/login', (0, express_validator_1.body)('email').isEmail().withMessage('Email inválido'), (0, express_validator_1.body)('password').notEmpty().withMessage('Contraseña es requerida'), validateFields, user_1.loginUser);
exports.default = router;
