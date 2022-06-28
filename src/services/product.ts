import ProductModel from '../models/product';
import connection from '../models/connection';
import Product from '../interfaces/product';

class ProductService {
  public model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public async getAll(): Promise<Product[]> {
    const products = await this.model.getAll();

    return products;
  }

  public async create(name: string, amount: string): Promise<Product> {
    const created = await this.model.create(name, amount);
    
    return created;
  }
}

export default ProductService;
