import expressAsyncHandler from "express-async-handler"

const newProject = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message:'newProjects'})
})


const getProjects = expressAsyncHandler(async (req, res) => {
    res.status(200).json({message:'getprojects'})
})

export {
    newProject,
    getProjects
}