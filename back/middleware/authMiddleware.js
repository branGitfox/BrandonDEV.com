import expressAsyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import Admin from '../models/adminModels.js';

const protect = expressAsyncHandler(async (req,res, next) => {
    
   
   const token = req.cookies.jwt

    if(token){
 
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.admin =await Admin.findById(decoded.adminId).select('-password')
            next()
        }catch(err){
            res.status(200).json({message:'Not authorized, invalid token', type:'error'})
        }
    }else{
        res.status(200).json({message:'No token'})
    }
})


export default protect