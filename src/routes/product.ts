import { Router } from 'express';
import ProductController from '../controllers/product';

const router = Router();

const product = new ProductController();

router.get('/products', product.getAll);

export default router;