import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import adminRouter from './routes/adminRouter.js'
import multer from 'multer'
import projectRouter from './routes/projectRouter.js'
import tutorielRouter from './routes/tutorielRouter.js'
import path from 'path'


dotenv.config()

const app = express()
app.use(cookieParser())
app.use(express.json())



app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', 'https://brandon-dev-com.vercel.app')
     res.setHeader('Access-Control-Allow-Credentials', 'true')
   res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
 next()
})

app.use(cors({
    origin:'https://brandon-dev-com.vercel.app',
}))
app.use(express.static('public'))
const __dirname =  path.dirname(import.meta.url)
const PORT= process.env.PORT || 3000
const MONGO_URI = process.env.MONGO_URI
const URLS_TO_CHECK = [
"https://brandon-dev
];
const CHECK_INTERVAL = 600000; // 10 minutes

//connexion a la base de donnee
mongoose.connect(MONGO_URI).then(res => {
    console.log('MongoDb connected');
  
   
    
    app.listen(PORT, ()=> {
       console.log('http://localhost:3000')
       setInterval(async () »> (
for (const url of URLS_TO_CHECK) {
try ‹
const response = await fetch(url);
if (tresponse.ok) <
console.log(*Non-2xx status from $(url}: ${response.st
}
} catch (error) {
console. log(Error fetching $(url): ${error.message)*.re
}, CHECK_INTERVAL);
    })
}).catch(err => console.log(err.message))

//route principale
app.get('/', (req, res)=>{
   res.send({message:'hello world'})
})



//route pour l'admin
app.use('/api/admin', adminRouter)

//Tous ce qui concerne multer j'utilise plus maintenant
//storage pour l'image et la video du projet
// const imageStorage = multer.diskStorage({
//     destination:(req,file,cb) => {
//         cb(null, path.join(__dirname,'public/images'))
//     },
    
//     filename:(req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })


// const garantyStorage = multer.diskStorage({
//     destination:(req,file,cb) => {
//         cb(null, path.join(__dirname,'public/garanty'))
//     },
    
//     filename:(req, file, cb) => {
//         cb(null, file.originalname)
//     }
// })

//uploade l'image et video pour le projet
// const uploadGaranty = multer({storage:garantyStorage})
// const uploadImage = multer({storage:imageStorage})

//route pour le projet
app.use('/api',projectRouter)

//route pour executer le middlewre d'upload d'image et video du projet
// app.post('/api/project/image', uploadImage.single('image'))
// app.post('/api/project/garanty', uploadGaranty.single('garanty'))



//storage pour le tutoriel
//Plus besoin de ces route parce que j'utilise cloudinary maintenant
// const tutoImageStorage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, path.join(__dirname,'public/tutoImages'))
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// })

// const tutoVideoStorage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, path.join(__dirname,'public/tutoVideos'))
//     },
//     filename: function(req, file, cb){
//         cb(null, file.originalname)
//     }
// })


//middleware d'upload d'image et de video pour le tutoriel
// const uploadTutoImage= multer({storage:tutoImageStorage})
// const uploadTutoVideo= multer({storage:tutoVideoStorage})

//route pour executer le middleware d'upload d'image et video du tutoriel
// app.post('/api/tutoriel/image', uploadTutoImage.single('bg'))
// app.post('/api/tutoriel/video', uploadTutoVideo.single('video'))

//route pour le tutoriel
app.use('/api', tutorielRouter)


