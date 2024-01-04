import { Router } from "express";

import { getProjects, createProject } from "../controllers/projects.controller";

const router: Router = Router();

router.get("/projects", getProjects);

router.post("/projects", createProject);

router.put("/projects/:id", (req, res) => {
  res.send("Hello World");
});

router.delete("/projects/:id", (req, res) => {
  res.send("Hello World");
});

router.get("/projects/:id", (req, res) => {
  res.send("Hello World");
});

export default router;
