import express from 'express';
import productRoutes from './routes/product';
import userRoutes from './routes/user';

const app = express();

app.use(express.json());

app.use(productRoutes);
app.use(userRoutes);

export default app;
