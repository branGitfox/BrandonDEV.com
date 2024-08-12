import express from 'express'
import { newProject, getProjects } from '../controllers/projectController.js'
import protect from '../middleware/authMiddleware.js'

const projectRouter= express.Router()

projectRouter.route('/project').post(newProject).get(protect,getProjects)

export default projectRouter