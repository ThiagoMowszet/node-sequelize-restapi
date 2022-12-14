import Sequelize from "sequelize"
import { DB_DATABASE, DB_USER, DB_PASSWORD } from './env'

export const sequelize = new Sequelize(
    DB_DATABASE,
    DB_USER,
    DB_PASSWORD,
    {
        host: "localhost",
        dialect: "mysql"
    }
);