import express from 'express'
import { createAdmin, logAdmin } from '../controllers/adminController.js'
const adminRouter = express.Router()

adminRouter.post('/', createAdmin)
adminRouter.post('/logAdmin', logAdmin)


export default adminRouter