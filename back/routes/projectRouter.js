import express from 'express'
import { newProject, getProjects } from '../controllers/projectController.js'
// import protect from '../middleware/authMiddleware.js'
import cookieParser from 'cookie-parser'
const projectRouter= express.Router()
projectRouter.use(cookieParser())
projectRouter.route('/project').post(newProject).get(getProjects)

export default projectRouter