import { asValue } from "awilix";
import { MongoClient } from "mongodb";
import container from "../container";

export default ({
  db
}: {db:MongoClient}) => {
  container.register({
    db: asValue(db)
  })
}