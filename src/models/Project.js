import { DataTypes } from "sequelize";
import { sequelize } from "../db/db.js"
import { Task } from './Task.js'

export const Project = sequelize.define('Projects', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name:{
        type: DataTypes.STRING
    },
    priority: {
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    },
}, {
    timestamps: true
})


Project.hasMany(Task, {
    foreingKey: 'projectId',
    sourceKey: 'id'
})


Task.belongsTo(Project, {
    foreingKey: 'projectId',
    sourceKey: 'id'
})