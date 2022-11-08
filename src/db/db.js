import Sequelize from "sequelize"

export const sequelize = new Sequelize(
    "projectsdb",
    "root",
    "Password@123",
    {
        host: "localhost",
        dialect: "mysql"
    }
);