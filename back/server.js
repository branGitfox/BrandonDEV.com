import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import adminRouter from './routes/adminRouter.js'
import multer from 'multer'
import projectRouter from './routes/projectRouter.js'

dotenv.config()

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors())

const PORT= process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI

mongoose.connect(MONGO_URI).then(res => {
    console.log('MongoDb connected');
    app.listen(PORT, (req, res) => {
        console.log(`http://localhost:${PORT}`);
    })
}).catch(err => console.log(err.message))


app.get('/', (req, res) => res.send('Server is running'))

app.use('/api/admin', adminRouter)

const imageStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'public/images')
    },

    filename:(req, file, cb) => {
        cb(null, file.originalname)
    }
})


const garantyStorage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'public/garanty')
    },

    filename:(req, file, cb) => {
        cb(null, file.originalname)
    }
})

const uploadGaranty = multer({storage:garantyStorage})
const uploadImage = multer({storage:imageStorage})


app.use('/api',projectRouter)
app.post('/api/project/image', uploadImage.single('image'))
app.post('/api/project/garanty', uploadGaranty.single('garanty'))



