import crypto from "crypto";
import JWT, { JwtPayload } from "jsonwebtoken";
import { IAccessToken } from "types/token.types";
import { CLIENT_ID } from "constants/config";
import container from "container";
import { MongoClient, ObjectId } from "mongodb";

interface IUser {
  _id: string;
  username: string;
}

interface IPayload {
  isAuthorized: boolean;
  user: IUser;
}

export const generateAccessToken = () => {
  const accessToken = crypto.randomBytes(256).toString("base64");
  const authToken = JWT.sign(accessToken,CLIENT_ID, { algorithm: 'HS256' });
  const token = {
    accessToken: authToken,
  }
  console.log(token);
  return token as IAccessToken;
}

export const saveAccessToken = async (accessToken:IPayload,tokens:string) => {
  try {
    const mongoClient: MongoClient = container.resolve('db');
    const userId = accessToken.user._id;
    const data = await mongoClient.db('Authentication').collection('Users').updateOne({ _id: new ObjectId(userId) }, { $set:{accessToken:tokens}});
    return data;
  } catch (error:any) {
    throw new Error(error);
  }
}