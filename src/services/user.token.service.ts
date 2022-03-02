import { IUserData } from "types/userData.types";
import * as UserService from "../services/User/user.service";
import * as AuthorizationToken from "services/Token/authToken.service";
import * as AuthenticationTokenService from "services/Token/token.service";
import JWT from 'jsonwebtoken';
import { CLIENT_ID } from "constants/config";

export const provideToken = async (data: IUserData) => {
  try {
    const { userWithData} = await UserService.fetchUser(data);

    if (userWithData.length !== 1) {
      throw new Error('Incorrect username and password');
    }
    const tokens = AuthorizationToken.generateAuthorizationToken(userWithData[0]);

    return { tokens };
  } catch (error:any) {
    throw new Error(error);
  }
  
}

export const provideAccessToken = async (token:string) => {
  try {
    
    const tokens = AuthenticationTokenService.generateAccessToken();
    if (!tokens) {
      throw new Error('Error creating access token');
    }

    const decoded = JWT.decode(token, { complete: true });

    if (!decoded) {
      throw new Error('Your session has expired');
    }
    const saveData = await AuthenticationTokenService.saveAccessToken(decoded.payload as any,tokens.accessToken);

    if (!saveData.acknowledged) {
      throw new Error('Your session has Expired');
    }
    
    return tokens;
  } catch (error:any) {
    throw new Error(error);
  }
  
}