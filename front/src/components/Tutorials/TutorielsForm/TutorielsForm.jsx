import { useState, useEffect} from "react"
import Nav from "../../Nav/Nav"
import { VideoCameraIcon } from "@heroicons/react/24/outline"
import { newTutorial, protect } from "../../../../actions/actions"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate, useNavigation } from "react-router-dom"
import axios from 'axios'

function TutorielsForm() {

    const [data, setData] = useState()
    const [image, setImage] = useState()
    const [video, setVideo] = useState()
    const [loading, setLoading] = useState(null)
    const [uploadedImageUrl, setUploadedImageUrl] =useState(null) 
    const [uploadedVideoUrl, setUploadedVideoUrl] =useState(null) 

    const navigate = useNavigate()
    
    // console.log(protect);
    useEffect(()=>{
        if(!protect){
            navigate('/')
        }
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setData((data) => ({...data, [name]:value}))
    }

    const handleSubmit =async (e) => {
        e.preventDefault()
        const imageData = new FormData()
        const videoData = new FormData()
        imageData.append('file', image)
        imageData.append('upload_preset', 'zhklmven')
        videoData.append('file', video)
        videoData.append('upload_preset', 'zhklmven')
        setLoading(true)
        try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dj8shv42o/image/upload', imageData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            setUploadedImageUrl(response.data.secure_url);
          } catch (error) {
            console.error('Error uploading image:', error);
          } finally {
            setLoading(false);
          }

          try {
            const response = await axios.post('https://api.cloudinary.com/v1_1/dj8shv42o/video/upload', videoData, {
              headers: {
                'Content-Type': 'multipart/form-data',
              },
            });
            setUploadedVideoUrl(response.data.secure_url);
          } catch (error) {
            console.error('Error uploading image:', error);
          } finally {
            setLoading(false);
          }
        setData((data) => ({...data, bg:uploadedImageUrl, video:uploadedVideoUrl}))
        //creation du tutoriel
        newTutorial(data)
        .then(res => res.data.type == 'success'? toast.success(res.data.message):toast.error(res.data.message))
        .catch(err => console.log(err.message))

       
    }

  return (
    <>
        <Nav/>
        <h1 className="mt-7 text-center text-gray-400 mb-4 text-4xl"><VideoCameraIcon className="inline text-blue-400 w-10 h-10"/> New Tutorials</h1>
        <div className="mt-4">
            <form onSubmit={handleSubmit} className='w-4/5 p-3 mx-auto' >
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Title</label>
                    <input onChange={handleChange} name="title" type="text" className='border bg-transparent text-blue-400 rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Description</label>
                    <textarea onChange={handleChange} name="description" type="text" className='border bg-transparent text-blue-400 rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Background Image</label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" className='border bg-blue-500  rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Video</label>
                    <input onChange={(e) => setVideo(e.target.files[0])} type="file" className='border bg-blue-500  rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <input type="submit" value={'New Tutorial'} className='border-none bg-blue-700 text-white font-bold rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
            </form>
        </div>
        <ToastContainer/>
    </>
  )
}

export default TutorielsForm
