import jwt from 'jsonwebtoken';

const secret = 'keySecret';

const jwtConfig:object = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const generatedToken = (username:string, id:number) => {
  jwt.sign({ username, id }, secret, jwtConfig);
};

export default generatedToken;
