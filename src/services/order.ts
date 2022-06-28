import Order from '../interfaces/order';
import connection from '../models/connection';
import OrderModel from '../models/order';
import ProductModel from '../models/product';

class OrderService {
  orderModel: OrderModel;

  productModel: ProductModel;

  constructor() {
    this.orderModel = new OrderModel(connection);
    this.productModel = new ProductModel(connection);
  }

  public async getAll(): Promise<Order[]> {
    const orders = await this.orderModel.getAll();

    // const productIds = await this.productModel.getAll();

    return orders;
  }
}

export default OrderService;
