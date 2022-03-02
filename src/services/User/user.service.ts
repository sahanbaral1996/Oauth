import container from "container";
import { MongoClient } from "mongodb";
import { IUserData } from "types/userData.types";

export const fetchUser = async (data:IUserData) => {
  const mongoClient: MongoClient = container.resolve('db');
    const userWithData = await mongoClient.db('Authentication').
      collection('Users').
      find({ userName: data.userName, password: data.password }).project({password:0}).
      toArray();
    return {
      userWithData
    }
}