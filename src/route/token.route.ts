import Router from "express";
import * as UserController from "../controller/user.controller";
import * as UserValidator from "../validators/user.validation";
import { celebrate, Segments } from "celebrate";
import authorize from "auth/authorization";

const publicTokenRouter = Router();
const privateTokenRouter = Router();

export default ({ app }) => {
  app.use("/token/authorize", publicTokenRouter);
  app.use("/token/authenticate", authorize, privateTokenRouter);

  publicTokenRouter.get("/",celebrate({
    [Segments.BODY]: UserValidator.userValidator,
  }), UserController.userController);
  
  privateTokenRouter.post("/",UserController.getAccessToken);

}
