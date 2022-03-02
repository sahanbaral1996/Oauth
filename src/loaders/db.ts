import { MongoAPIError, MongoClient } from "mongodb";

export default async () => {
  try {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/ecosystem/drivers/node/ for more details
     */
    const uri = `mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+1.1.9`;

    const mongoClient:MongoClient = new MongoClient(uri);
    await mongoClient.connect();
    return mongoClient;
  } catch (error:any) {
    throw new Error(error);
  }
};