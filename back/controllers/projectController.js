import expressAsyncHandler from "express-async-handler"
import Project from "../models/projectModels.js"

const newProject = expressAsyncHandler(async (req, res) => {
    const {name,
         description,
          site,
          source,
           image,
            garanty,
            stacks}=req.body

            const project = await Project.create({
                name, 
                description,
                site,
                source,
                image,
                garanty,
                stacks,
            })

            if(project){
                res.status(200).json({message:'Project created', type:'success'})
            }else{
                res.status(200).json({message:'Every input is required', type:'error'})
            }
})


const getProjects = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message:'getprojects'})
})

export {
    newProject,
    getProjects
}