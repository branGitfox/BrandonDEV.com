import { Link, useNavigate } from "react-router-dom"
import { FolderIcon } from "@heroicons/react/24/outline"
import { newProject , uploadImage, uploadGaranty} from "../../../../actions/actions"

import Nav from "../../Nav/Nav"
import { useState, useEffect } from "react"
import { toast , ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { protect } from "../../../../actions/actions"

function ProjectForm() {
    const [image, setImage] = useState()
    const [garanty, setGaranty] = useState()
    const [data, setData] = useState()
    const navigate = useNavigate()

    useEffect(()=> {
        if(!protect){
            navigate('/')
        }
    })
 const imageData = new FormData() 
 const garantyData = new FormData()
    const handleChange = (e) => {
        const {name, value} = e.target
        setData((data) => ({...data, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()     
        imageData.append('image', image)      
        garantyData.append('garanty', garanty)   
        setData((data) => ({...data, image:image.name, garanty:garanty.name}))
        console.log(data);
        uploadGaranty(garantyData).
        then(uploadImage(imageData)).
        then(newProject(data).
        then(res => res.data.type =='error'? toast.error(res.data.message):navigate('/projects'))
        .catch(err => console.log(err.message)))   
        
    }

  return (
    <>
        <Nav/>
        <h1 className="mt-7 text-center text-gray-400 mb-4 text-4xl"><FolderIcon className="inline text-blue-400 w-10 h-10"/> New Project</h1>
        <div className="mt-4">
            <form onSubmit={handleSubmit} className='w-4/5 p-3 mx-auto'>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Title</label>
                    <input name="name" onChange={handleChange} type="text" className='border bg-transparent rounded p-2 text-blue-400 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Description</label>
                    <textarea onChange={handleChange} name="description" type="text" className='border bg-transparent rounded text-blue-400 p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Site</label>
                    <input onChange={handleChange} name="site" type="text" className='border bg-transparent rounded text-blue-400 p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Source</label>
                    <input onChange={handleChange} name="source" type="text" className='border bg-transparent rounded text-blue-400 p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Stacks</label>
                    <input name="stacks" onChange={handleChange} type="text" className='border bg-transparent rounded text-blue-400 p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Image</label>
                    <input onChange={(e) => setImage(e.target.files[0])} type="file" className='border bg-blue-500  rounded text-blue-400 p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Garanty</label>
                    <input onChange={(e) => setGaranty(e.target.files[0])} type="file" className='border bg-blue-500  rounded text-blue-400 p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <input type="submit" value={'New Project'} className='border-none bg-blue-700 text-white font-bold rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
            </form>
        </div>
        <ToastContainer/>
    </>
  )
}

export default ProjectForm