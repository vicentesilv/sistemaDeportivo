import { Router } from 'express';
import { body, validationResult } from 'express-validator';
import { actualizarUsuario, eliminarUsuario, getUsuario, getUsuarios, loginUser, newUser } from '../controllers/user';
import validateToken from './validate-token';

const router = Router();

const validateFields = (req: any, res: any, next: any) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

router.get('/mostrar', validateToken, getUsuarios)
router.get('/:id', validateToken, getUsuario);
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
router.delete('/:id', validateToken, eliminarUsuario);
router.put('/:id', validateToken,
  body('email').optional().isEmail().withMessage('Email inválido'),
  body('password').optional().isLength({ min: 6 }).withMessage('La contraseña debe tener al menos 6 caracteres'),
  validateFields,
  actualizarUsuario
);

export default router;