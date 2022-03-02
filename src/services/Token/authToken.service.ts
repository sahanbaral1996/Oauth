import JWT from "jsonwebtoken";
import { IAuthorizationToken } from "types/token.types";
import { CLIENT_ID } from "constants/config";

export const generateAuthorizationToken = (data:any) => {
  const authToken = JWT.sign({isAuthorized:true,user:data},CLIENT_ID, { algorithm: 'HS256',expiresIn:60 });
  const token = {
    authorization:'token- '+authToken
  }
  return token as IAuthorizationToken;
}