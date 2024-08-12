import expressAsyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import Admin from '../models/adminModels.js';

const protect = expressAsyncHandler(async (req,res, next) => {
    let token;
    token = req.cookies.jwt 
    if(token){
        try{
            const decoded = jwt.verify(token, process.env.JWT_SECRET, {
                httpOnly:true
            })
            const admin = await Admin.findById(decoded.adminId).select('-password')
            if(!admin){
                res.status(200).json({message:'Invalid token'})
            }

            req.admin = admin
            next()
        }catch(err){
            res.status(200).json(err.message)
        }
    }else{
        res.status(200).json({message:'No token'})
    }
})


export default protect