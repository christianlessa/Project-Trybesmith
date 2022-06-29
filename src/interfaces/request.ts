import { Request } from 'express';

interface RequestUser extends Request {
  user?: {
    username: string;
    id: number;
  }  
}

export default RequestUser;