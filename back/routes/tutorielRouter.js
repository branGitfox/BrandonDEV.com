import express from "express"
import { getOne, getTutoriel, incrementDownload, incrementLike, incrementView, newTutoriel } from "../controllers/tutorialController.js"
const tutorielRouter = express.Router()

tutorielRouter.route('/tutoriel').post(newTutoriel).get(getTutoriel)
tutorielRouter.get('/tutoriel/:id', getOne)
tutorielRouter.get('/tutoriel/incrementView/:id', incrementView)
tutorielRouter.get('/tutoriel/incrementLike/:id', incrementLike)
tutorielRouter.get('/tutoriel/incrementDownload/:id', incrementDownload)


export default tutorielRouter