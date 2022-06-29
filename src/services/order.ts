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

    const ordersByIds = await Promise.all(orders.map(async ({ id, userId }) => {
      const productsByOrderId = await this.productModel.getByOrderId(id);
      const productsIds = productsByOrderId.map((product) => product.id);

      return ({
        id,
        userId,
        productsIds,
      });
    }));

    return ordersByIds;
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
