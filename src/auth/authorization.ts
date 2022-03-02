import { NextFunction } from "express";
import JWT from "jsonwebtoken";
import { CLIENT_ID } from "constants/config";

export default (req:Request,res:Response,next:NextFunction)=>{
  const headers = req.headers['authorization'];
  const token = headers.split(" ")[1];
  if (!token) {
    throw new Error('Your Session has Expipred sadsa');
  }
  JWT.verify(token, CLIENT_ID, (err, decoded) => {
    if (err) {
      throw new Error('Your Session has Expired');
    } else {
      next();
    }
  })
}