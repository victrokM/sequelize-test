import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import Project from "../project"; // Fix the import statement to use lowercase 'project' instead of 'Project'

interface tasksI {
  id: number;
  name: string;
  done: boolean;
  projectid: number;
}

@Table({ modelName: "tasks" })
class Task extends Model<tasksI> {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({ allowNull: false, defaultValue: "" })
  name!: string;

  @Column({ allowNull: false, defaultValue: false })
  done!: boolean;

  @ForeignKey(() => Project)
  @Column({ allowNull: false })
  projectid!: number;

  @BelongsTo(() => Project)
  project!: Project;
}

export default Task;
