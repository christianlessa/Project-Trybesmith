import { Pool, ResultSetHeader } from 'mysql2/promise';
import User from '../interfaces/user';

class UserModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;

    const created = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );

    const [dataInserted] = created;
    const { insertId } = dataInserted; 
    return {
      id: insertId,
      username,
      classe,
      level,
      password,
    };
  }
}

export default UserModel;