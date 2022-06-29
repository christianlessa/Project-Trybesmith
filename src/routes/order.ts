import { Router } from 'express';
import OrderController from '../controllers/order';
import ValidateProducts from '../middleware/validProduct';
import AuthorizationLogin from '../middleware/authorization';

const router = Router();

const order = new OrderController();
const validProduct = new ValidateProducts();
const authorization = new AuthorizationLogin();

router.get('/orders', order.getAll);
router.post(
  '/orders',
  authorization.validToken,
  validProduct.validateProductsIds,
  order.create,
);

export default router;