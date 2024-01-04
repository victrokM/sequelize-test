import {
  Model,
  Column,
  Table,
  PrimaryKey,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";
import Task from "../task";

interface projectI {
  id?: number;
  name: string;
  priority: number;
  description: string;
}

@Table({ modelName: "projects" })
class Project extends Model<projectI> {
  @PrimaryKey
  @AutoIncrement
  @Column({ allowNull: false })
  readonly id!: number;

  @Column({ allowNull: false, defaultValue: "" })
  name!: string;

  @Column({ allowNull: false, defaultValue: 0 })
  priority!: number;

  @Column({ allowNull: false, defaultValue: "" })
  description!: string;

  @HasMany(() => Task)
  tasks!: Task[];
}

export default Project;
