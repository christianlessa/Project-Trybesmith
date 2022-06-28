import { Router } from 'express';
import OrderController from '../controllers/order';

const router = Router();

const order = new OrderController();

router.get('/orders', order.getAll);

export default router;