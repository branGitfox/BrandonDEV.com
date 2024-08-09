import mongoose from "mongoose";
import bcrypt from 'bcryptjs'
const adminSchema = mongoose.Schema({
    pseudo:{
        type:String,
        unique:true,
        required:true
    }
    ,
    password:{
        type:String,
        required:true
    }
}, {timestamps:true})


adminSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        next()
    }

    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

adminSchema.methods.matchPassword = async function(enteredPassword){
    return await bcrypt.compare(enteredPassword, this.password)
}

const Admin = mongoose.model('Admin', adminSchema)
export default Admin