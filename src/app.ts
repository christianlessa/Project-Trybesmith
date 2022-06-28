import express from 'express';
import productRoutes from './routes/product';
import userRoutes from './routes/user';
import orderRoutes from './routes/order';
import loginRoutes from './routes/login';

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(userRoutes);
app.use(orderRoutes);
app.use(loginRoutes);

export default app;
