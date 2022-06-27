import { Request, Response } from 'express';
import ProductService from '../services/product';

class ProductController {
  constructor(private productService = new ProductService()) {}

  public getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAll();

    res.status(200).json(products);
  };

  public create = async (req: Request, res: Response) => {
    const { name, amount } = req.body;

    const created = await this.productService.create(name, amount);

    return res.status(201).json(created);
  };
}

export default ProductController;
