import User from '../interfaces/user';
import connection from '../models/connection';
import UserModel from '../models/user';

class UserService {
  public model: UserModel;

  constructor() {
    this.model = new UserModel(connection);
  }

  public async getAll(): Promise<User[]> {
    const user = await this.model.getAll();
    return user;
  }

  public async create(user: User): Promise<User> {
    const created = await this.model.create(user);
    return created;
  }
}

export default UserService;
