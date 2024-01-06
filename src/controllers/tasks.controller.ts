import { Request, Response } from "express";
import Task from "../models/task";

export const createTask = async (req: Request, res: Response) => {
  const { name, done, projectId } = req.body;

  try {
    const newTask = await Task.create({
      name,
      done,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
};

export const getTasks = async (req: Request, res: Response) => {
  try {
    const tasks = await Task.findAll();
    return res.json(tasks);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({
      where: {
        id,
        // attributes: ["id", "name", "done", "projectId"], attributes sirve para devolver solo los campos que queremos y optimizar la base de datos
      },
    });
    if (task === null || task === undefined) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const deleteTask = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleteRowCount = await Task.destroy({
      where: {
        id,
      },
    });
    if (deleteRowCount === 0) {
      return res.status(404).json({ message: "Task not found" });
    }
    return res.json({ message: "Task deleted successfully" });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const updateTask = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, done, projectId } = req.body;

  try {
    const task = await Task.findOne({
      where: {
        id,
      },
    });
    if (task === null || task === undefined) {
      return res.status(404).json({ message: "Task not found" });
    }

    task.set(req.body);
    task.save();

    return res.json(task);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
