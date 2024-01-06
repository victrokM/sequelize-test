import express, { Express } from "express";
// import routerProject from "./routes/projects.routes";
import routes from "./routes/routes";

const app: Express = express();

app.use(express.json());

app.use(routes);

export default app;
