import { Router } from 'express';
import UserController from '../controllers/user';
import ValidateUser from '../middleware/validUser';

const router = Router();

const userController = new UserController();
const validateUser = new ValidateUser();

router.post(
  '/users',
  validateUser.validateUsername,
  validateUser.validateClasse,
  validateUser.validateLevel,
  validateUser.validatePassword,
  userController.create,
);

export default router;