import asyncHandler from 'express-async-handler'
import Admin from '../models/adminModels.js'
//creation d'un admin

const createAdmin = asyncHandler(async (req, res) => {  
    const {pseudo, password} = req.body
    const adminExist= await Admin.findOne({pseudo})
    if(adminExist){
        res.status(401).json({message:'Cannot create another admin'})
    }

    const admin = await Admin.create({
        pseudo,
        password
    })

   if(admin){
        res.status(200).json(admin)
   }else{
    throw new Error('Server error')
   }


})


const logAdmin = asyncHandler(async (req, res) => {
    const {pseudo, password} = req.body
    const adminExist = await Admin.findOne({pseudo})
    if(!adminExist){
        res.status(401).json({message:'Admin do not exist'})
    }

    if(adminExist && await adminExist.matchPassword(password)){
        res.status(200).json({message:'Admin logged'})
    }else{
        res.status(200).json({message:'Invalid auth or password'})
    }
})


export {
    createAdmin,
    logAdmin
}