import { Response, Request } from "express";
import Project from "../models/project";
import Task from "../models/task";

export const getProjects = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const projects = await Project.findAll();
    return res.json(projects);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getProject = async (
  req: Request,
  res: Response
): Promise<Response> => {
  try {
    const { id } = req.params;
    const project = await Project.findByPk(id);
    if (project === null || project === undefined) {
      return res.status(404).json({ message: "Project not found" });
    }
    return res.json(project);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const createProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { name, priority, description } = req.body;

  try {
    const newProject = await Project.create({
      name: name,
      priority: priority,
      description: description,
    });
    res.json(newProject);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const updateProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  const { id } = req.params;
  const { name, priority, description } = req.body;

  try {
    // const project = await Project.findOne({
    //   where: {
    //     id: id,
    //   },
    // });

    // if (project) {
    //   project.name = name;
    //   project.priority = priority;
    //   project.description = description;

    //   await project.save();
    //   res.json({ message: "Project updated" });
    // } else {
    //   res.status(404).json({ message: "Project not found" });
    // }
    const project = await Project.findByPk(id);
    if (project !== null && project !== undefined) {
      project.name = name;
      project.priority = priority;
      project.description = description;

      await project.save();

      res.json(project);
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const deleteProject = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    console.log(id);

    const projects = await Project.destroy({
      where: {
        id: id,
      },
    });

    res.sendStatus(204);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getProjectTask = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;

    const task = await Task.findAll({
      where: {
        projectId: id,
      },
    });

    res.json(task);
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
