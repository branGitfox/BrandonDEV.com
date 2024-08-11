import mongoose from 'mongoose'

const projectSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,    
    },

    description:{
        type:String,
        required:true
    },

    site:{
        type:String,
    },

    source:{
        type:String,
        required:true
    },

    image:{
        type:String,
        required:true
    },

    garanty:{
        type:String,
        required:true
    },

    stacks:{
        type:String,
        required:true
    }
}) 


const Project = mongoose.model('Project', projectSchema)

export default Project