import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/product';

class ProductModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Product[]> {
    const [products] = await this.connection.execute('SELECT * FROM Trybesmith.Products');
    
    return products as Product[];
  }

  public async create(name: string, amount: string): Promise<Product> {
    const [created] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );

    return {
      id: created.insertId,
      name,
      amount,
    };
  }
}

export default ProductModel;
