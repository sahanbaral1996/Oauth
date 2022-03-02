import dependencyInjector from "./dependencyInjector";
import dbLoader from "./db";
import expressLoader from "./express";

export default async ({ app }) => {
  const db = await dbLoader();
  console.log('Database connectione stablished');

  await expressLoader({ app });
   dependencyInjector({
    db
  });
}