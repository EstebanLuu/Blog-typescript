import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("blogdb", "postgres", "password", {
  host: "localhost",
  dialect: "postgres",
});
