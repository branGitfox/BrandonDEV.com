import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { newProject } from '../../../../actions/actions'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function NewProject() {

 const [formData, setFormData] = useState()

    const navigate = useNavigate()
    const [loading, setIsLoading] = useState(false)
    const [image, setImage]=useState()
    const [garanty, setGaranty]=useState()

    
    
    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((formData) => ({...formData, [name]:value}))
    }
    
    
    const handleSubmit = async (e) => {
        e.preventDefault() 
        const formData = new FormData()
        formData.append('image', image)
        formData.append('garanty', garanty)
        // form.append('image', image)
        // form.append('garanty', garanty)
        // setFormData((formData) => ({...formData, ['image']:image, ['garanty']:garanty}))
        setIsLoading(true)
        // console.log(formData);
        await newProject(formData)
        .then(res => res.data.type=='success'?toast.success(res.data.message):toast.error(res.data.message))
        .then(setIsLoading(false))
        .catch(err => toast.error(err.message))
    }




    
    
  return (
    <>
        <div className="container mt-5">

                <h1 className='text-white'>New Project</h1>
                <div className="contact-container mt-5" style={{position:'relative', top:'2rem'}}>
                <div className="form-container">
                    <form onSubmit={handleSubmit} encType='multipart/form-data'>
                        <div>
                            <label htmlFor="project">Project Name</label>
                            <input type="text" name="project"  onChange={handleChange}  id="project"/>
                        </div>
                        <div>
                            <label htmlFor="desc">Project Description</label>
                           <textarea  name="desc"  onChange={handleChange}  id="desc"></textarea>
                       </div>
                       <div>
                             <label htmlFor="site">Project Link</label>
                            <input type="text" name="site"  onChange={handleChange}  id="site"/>
                        </div>
                        <div>
                             <label htmlFor="Source">Project Source</label>
                            <input type="text" name="Source"  onChange={handleChange}  id="Source"/>
                        </div>
                        <div>
                             <label htmlFor="img">Project image</label>
                            <input  type="file"  onChange={(e) =>setImage(e.target.files[0])}  id="img"/> 
                        </div>
                        <div>
                             <label htmlFor="garanty">Project site Garanty</label>
                            <input  type="file"  onChange={(e) =>setGaranty(e.target.files[0])}  id="garanty"/> 
                        </div>
                        <div>
                            <label htmlFor="stacks">Project stacks</label>
                            <input type="text" name="stacks"  onChange={handleChange}  id="stacks"/>
                        </div>
                   <div>
                        <button  className="form-control btn btn-secondary">{loading?'wait...':'New'}</button>
                   </div>         
                </form>
            </div>
            </div>
    </div>
            <ToastContainer/>
       
    </>
  )
}

export default NewProject