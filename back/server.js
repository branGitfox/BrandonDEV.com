import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import adminRouter from './routes/adminRouter.js'
import multer from 'multer'

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

const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null, 'public/images')
    },

    filename:(req, file, cb) => {
        cb(null, file.originlname)
    }
})

const upload = multer({storage})

// app.use('/api/project', upload.single('image'), ProjectRouter)


