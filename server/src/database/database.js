import { Sequelize } from "sequelize";

export const sequelize = new Sequelize("product_manager", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});
