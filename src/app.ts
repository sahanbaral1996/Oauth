import Express from 'express';
import loader from "./loaders/index";

const startServer = async () => {
  const app = Express();

  await loader({ app });

  return app.listen(4001, () => {
    console.log('Server started at 4001');
  }).on("error", (err) => {
    console.error(err);
    process.exit(1)
  });
}

startServer();