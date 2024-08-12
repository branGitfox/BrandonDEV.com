import expressAsyncHandler from "express-async-handler"
import Project from "../models/projectModels.js"

const newProject = expressAsyncHandler(async (req, res) => {

        const image = req
        console.log(image);
        res.status(200).json({message:'successfully', type:'success'})
})


const getProjects = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message:'getprojects'})
})

export {
    newProject,
    getProjects
}