import Order from '../interfaces/order';
import ProductsIds from '../interfaces/productsIds';
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

    return orders;
  }

  public async create(id: number, productsId: number[]): Promise<ProductsIds> {
    const orderId = await this.orderModel.create(id);

    productsId.map((product) => this.productModel.update(orderId, product));

    return {
      userId: id,
      productsIds: productsId,
    };
  }
}

export default OrderService;
