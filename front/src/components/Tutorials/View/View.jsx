import { HeartIcon, ArrowDownIcon, ArrowLeftIcon, HashtagIcon} from "@heroicons/react/24/outline"

import Nav from "../../Nav/Nav"
import { Link, useParams } from "react-router-dom"
import { getOneTutorial, incrementDownload, incrementLike } from "../../../../actions/actions"
import { useEffect, useState } from "react"
import LoadingSpinnerComponent from "react-spinners-components"
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'


function View() {
    const {id} = useParams()
    const [tutorial, setTutorial] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(() => {
            getOneTutorial(id)
        .then(res => setTutorial(res.data))
        .then(setLoading(false))
        .catch(err => console.log(err.mesage))    
    }, [id])



    
  return (
    <>
    <Nav/>
    
        <div className="w-2/3 mt-5  mx-auto">
        {loading?<LoadingSpinnerComponent type='Spinner' color='blue' size={'100px'}/>:<Tutorial tutorial={tutorial}/>}
        </div>
        <Link to={'/tutorials'}><ArrowLeftIcon className="text-blue-400 w-5 h-5 absolute top-20 mx-5"/></Link>
        <ToastContainer/>
    </>
  )
}


function Tutorial ({tutorial}){
    return (
        <>
            <video className='w-full shadow shadow-blue-700 h-3/5 border-none rounded mx-auto' controls src={`http://localhost:3000/tutoVideos/${tutorial?.video}`} ></video>
            <div className="mt-5 ">
                <a target="_blank" onClick={() => incrementDownload(tutorial._id).then(toast.success('Enjoy the video !'))} href={`http://localhost:3000/tutoVideos/${tutorial?.video}`} download className='p-2 bg-blue-400 font-md rounded'>Download <ArrowDownIcon className="w-5 h-5 inline text-blue-500"/></a>
                <button onClick={() => incrementLike(tutorial._id).then(toast.success('Thanks a lot !'))} className='p-2 bg-red-300   font-md mx-2 rounded'>Leave a <HeartIcon className="w-5 h-5 inline text-red-500"/></button>
            </div>
            <div className="mt-5">
                <h4 className="text-gray-500"><HashtagIcon className='w-7 h-7 inline text-violet-500'/>{tutorial?.title}</h4>
                <p className="mt-2 text-gray-400 font-extralight">
                   {tutorial?.description}
                </p>
            </div>
        </>
    )
}
export default View