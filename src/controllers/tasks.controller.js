import {Task} from '../models/Task.js'


export const getTask = async (req, res) => {
  try {
     const tasks = await Task.findAll()
     res.json(tasks)
 
  } catch (error) {
      return res.status(500).json({message: error.message}) 
    }
  }


export const createTask = async (req, res) => {}
