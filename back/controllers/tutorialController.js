import Turoriel from "../models/tutorialModel.js";
import expressAsyncHandler from "express-async-handler";

export const newTutoriel = expressAsyncHandler(async (req, res) => {
    const {title, description, video, bg} = req.body
    const tutoriel= await Turoriel.create({
        title,
        description,
        video,
        bg,
        view:0,
        download:0,
        like:0
    })

    if(!tutoriel){
    return res.status(401).json({message:'something went wrong', type:'error'})

    }

    res.status(200).json({message:'tutorial created', type:'success'})
})

export const getTutoriel = expressAsyncHandler(async (req, res) => {
    const tutoriel = await Turoriel.find()
    if(!tutoriel){
        return res.status(200).json({message:'no tutorial yet'})
    }

    res.status(200).json(tutoriel)

})



export const getOne = expressAsyncHandler(async (req, res) => {
    const id = req.params.id
    
    
    const tutorial = await Turoriel.findById(id)
    if(!tutorial){
        return res.status(200).json({message:'tutorial do not exist'})
    }

    
    
    // await Turoriel.findByIdAndUpdate(id, {view:tutorial.view + 1})
    res.status(200).json(tutorial)
})

export const incrementView = expressAsyncHandler(async (req, res) => {
    const id = req.params.id
    
    
    const tutorial = await Turoriel.findById(id)
    if(!tutorial){
        return res.status(200).json({message:'tutorial do not exist'})
    }

    await Turoriel.findByIdAndUpdate(id, {view:tutorial.view + 1})
    res.status(200).json({message:'incremented'})
})

export const incrementLike = expressAsyncHandler(async (req, res) => {
    const id = req.params.id
    
    
    const tutorial = await Turoriel.findById(id)
    if(!tutorial){
        return res.status(200).json({message:'tutorial do not exist'})
    }

    await Turoriel.findByIdAndUpdate(id, {like:tutorial.like + 1})
    res.status(200).json({message:'incremented'})
})

export const incrementDownload = expressAsyncHandler(async (req, res) => {
    const id = req.params.id
    
    
    const tutorial = await Turoriel.findById(id)
    if(!tutorial){
        return res.status(200).json({message:'tutorial do not exist'})
    }

    await Turoriel.findByIdAndUpdate(id, {download:tutorial.download + 1})
    res.status(200).json({message:'incremented'})
})