import Router from 'express';
import token from "./token.route";

export default () => {
  const app = Router();
  token({ app });

  return app;
}