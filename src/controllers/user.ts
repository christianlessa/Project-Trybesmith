import { Request, Response } from 'express';
import UserService from '../services/user';
import generatedToken from '../middleware/generateToken';

class UserController {
  constructor(private userService = new UserService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;

    const userCreated = await this.userService.create(user);
    
    const token = generatedToken(userCreated.username, userCreated.id);

    return res.status(201).json({ token });
  };
}

export default UserController;
