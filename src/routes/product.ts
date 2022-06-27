import { Router } from 'express';
import ProductController from '../controllers/product';
import ValidateProducts from '../middleware/validProduct';

const router = Router();

const product = new ProductController();
const validProducts = new ValidateProducts();

router.get('/products', product.getAll);
router.post('/products', validProducts.validateName, validProducts.validateAmount, product.create);

export default router;