import bodyParser from 'body-parser';
import helmet from "helmet";
import cors from "cors";
import routes from "../route/index";
export default async ({ app }) => {
  app.use(bodyParser.json());
  app.use(helmet());
  app.use(cors());
  app.use("/status", (req, res, next) => {
    res.send({ status: 'OK' })
  })
  app.use("/oauth", routes());

}