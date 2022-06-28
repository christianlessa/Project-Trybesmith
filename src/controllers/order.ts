import { Request, Response } from 'express';
import OrderService from '../services/order';

class OrderController {
  constructor(private orderService = new OrderService()) {}

  public getAll = async (req: Request, res: Response) => {
    const orders = await this.orderService.getAll();

    return res.status(200).json(orders);
  };
}

export default OrderController;
