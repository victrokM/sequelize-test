import { Sequelize } from "sequelize-typescript";
console.log(process.env.DB_NAME);
require("dotenv").config();

const sequelize = new Sequelize(
  process.env.DB_NAME ?? "projectsDB",
  process.env.DB_USER ?? "postgres",
  process.env.DB_PASS ?? "victor123",
  {
    host: process.env.DB_HOST ?? "localhost",
    dialect: "postgres",
    port: Number(process.env.DB_PORT) ?? 5432,
    protocol: "postgres",
  }
);

export default sequelize;
