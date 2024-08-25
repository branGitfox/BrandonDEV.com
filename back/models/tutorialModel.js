import mongoose from "mongoose";

const tutorielSchema = mongoose.Schema({
    title:{
        type:String,
    },

    view:{
        type:Number,
    },

    like:{
        type:Number
    },
    download:Number,
    description:{
        type:String,
        required:true
    },

    video:{
        type:String,
        required:true
    },

    bg:{
        type:String,
        required:true
    }, 
     
}, {timestamps:true})

const Turoriel = mongoose.model('Tutoriel', tutorielSchema)

export default Turoriel