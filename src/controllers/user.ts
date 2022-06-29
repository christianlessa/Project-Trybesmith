import { Request, Response } from 'express';
import UserService from '../services/user';
import generatedToken from '../middleware/generateToken';

class UserController {
  constructor(private userService = new UserService()) {}

  public getAll = async (req: Request, res: Response) => {
    const { username, password } = req.body;

    const users = await this.userService.getAll();
    const userValid = users.find((user) => user.username === username
     && user.password === password);

    if (!userValid) {
      return res.status(401).json({ message: 'Username or password invalid' });
    }

    const token = generatedToken(userValid.username, userValid.id);
    
    return res.status(200).json({ token });
  };

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.userService.create(user);
    const token = generatedToken(userCreated.username, userCreated.id);
    
    return res.status(201).json({ token });
  };
}

export default UserController;
