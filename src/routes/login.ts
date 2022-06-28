import { Router } from 'express';
import UserController from '../controllers/user';
import ValidateUser from '../middleware/validUser';

const router = Router();

const user = new UserController();
const validUser = new ValidateUser();

router.post('/login', validUser.validateUsername, validUser.validatePassword, user.getAll);

export default router;