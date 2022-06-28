import express from 'express';
import productRoutes from './routes/product';
import userRoutes from './routes/user';
import orderRoutes from './routes/order';

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(userRoutes);
app.use(orderRoutes);

export default app;
