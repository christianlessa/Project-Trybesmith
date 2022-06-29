import { Response, NextFunction } from 'express';
import jwt, { JwtPayload } from 'jsonwebtoken';
import RequestUser from '../interfaces/request';

class AuthorizationLogin {
  public validToken = (req: RequestUser, res: Response, next: NextFunction): Response | void => {
    const { authorization } = req.headers;
    const secret = 'keySecret';

    if (!authorization) {
      return res.status(401).json({ message: 'Token not found' });
    }

    try {
      const decodedToken = jwt.verify(authorization, secret) as JwtPayload;
      req.user = {
        id: decodedToken.id,
        username: decodedToken.username,
      };
    } catch (error) {
      res.status(401).json({ message: 'Invalid token' });
    }

    next();
  };
}

export default AuthorizationLogin;
