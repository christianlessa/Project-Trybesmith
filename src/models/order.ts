import { Pool, ResultSetHeader } from 'mysql2/promise';
import Order from '../interfaces/order';

class OrderModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Order[]> {
    const [orders] = await this.connection.execute('SELECT * FROM Trybesmith.Orders');
    return orders as Order[];
  }

  public async create(id: number): Promise<number> {
    const [created] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [id],
    );

    return created.insertId;
  }
}

export default OrderModel;