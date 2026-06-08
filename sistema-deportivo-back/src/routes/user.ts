import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { loginUser, newUser } from '../controllers/user';

const router = Router();

const validateFields = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.post('/',
  body('email').isEmail().withMessage('Email inválido'),
  body('nombre').notEmpty().withMessage('Nombre es requerido'),
  body('password').isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  validateFields,
  newUser
);
router.post('/login',
  body('email').isEmail().withMessage('Email inválido'),
  body('password').notEmpty().withMessage('Contraseña es requerida'),
  validateFields,
  loginUser
)

export default router;
