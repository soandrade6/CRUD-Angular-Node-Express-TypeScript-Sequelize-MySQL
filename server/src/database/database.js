import { Sequelize } from "sequelize";

const sequelize = new Sequelize("product_manager", "root", "admin", {
  host: "localhost",
  dialect: "mysql",
});

export default sequelize;