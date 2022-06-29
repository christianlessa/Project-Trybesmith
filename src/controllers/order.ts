import { Request, Response } from 'express';
import RequestUser from '../interfaces/request';
import OrderService from '../services/order';

type User = {
  id: number;
  username: string;
};

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    return res.status(200).json(orders);
  };

  public create = async (req: RequestUser, res: Response) => {
    const { id } = req.user as User;
    const { productsIds } = req.body;

    const created = await this.orderService.create(id, productsIds);
    
    return res.status(201).json(created);
  };
}

export default OrderController;
