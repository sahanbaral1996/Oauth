import { NextFunction } from "express";
import * as UserService from "../services/user.token.service";

export const userController = async (req,res,next) => {
  try {
    const data = req.body;

    const tokenData = await UserService.provideToken(data);
    console.log(tokenData);
    if (tokenData) {
      return res.json({
        tokenData
      })
    }
    return res.json({
      message: 'Your session has Expired',
    })
  } catch (error) {
    next(error);
  }
}

export const getAccessToken = async (req,res,next) => {
  try {
    const token = req.headers['authorization'].split(" ")[1];

    const tokenData = await UserService.provideAccessToken(token);
    if (tokenData) {
      return res.json({
        tokenData
      })
    }
    return res.json({
      message: 'Your session has Expired',
    })
  } catch (error) {
    next(error);
  }
}