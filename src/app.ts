import express, { Express } from "express";
import routerProject from "./routes/projects.routes";

const app: Express = express();

app.use(express.json());

app.use(routerProject);

export default app;
