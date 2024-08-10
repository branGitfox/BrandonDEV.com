import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
function NewProject() {
    const [formData, setFormData] = useState({})
    const navigate = useNavigate()
    const [loading, setIsLoading] = useState(false)

    const handleChange = (e) => {
        const {name,value} = e.target

        setFormData((formData) => ({...formData , [name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)
        await createAdmin('http://localhost:3000/api/admin', formData) 
        .then(res => res.data.type=='success'?toast.success(res.data.message)?navigate('/'):''
        :toast.error(res.data.message))
        .then(setIsLoading(false))
        .catch(err => toast.error(err.message))
      
    }
  return (
    <>
        <div className="container mt-5">

                <h1 className='text-white'>New Project</h1>
                <div class="contact-container mt-5" style={{position:'relative', top:'2rem'}}>
                <div class="form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label for="project">Project Name</label>
                            <input type="text" name="project" onChange={handleChange}  id="project"/>
                        </div>
                        <div>
                            <label for="desc">Project Description</label>
                           <textarea  name="desc" onChange={handleChange}  id="desc"></textarea>
                       </div>
                       <div>
                             <label for="site">Project Link</label>
                            <input type="text" name="site" onChange={handleChange}  id="site"/>
                        </div>
                        <div>
                             <label for="Source">Project Source</label>
                            <input type="text" name="Source" onChange={handleChange}  id="Source"/>
                        </div>
                        <div>
                             <label for="img">Project image</label>
                            <input  type="file" onChange={handleChange}  id="img"/> 
                        </div>
                        <div>
                             <label for="garanty">Project site Garanty</label>
                            <input  type="file" onChange={handleChange}  id="garanty"/> 
                        </div>
                        <div>
                            <label for="stacks">Project stacks</label>
                            <input type="text" name="stacks" onChange={handleChange}  id="stacks"/>
                        </div>
                   <div>
                        <button class="form-control btn btn-secondary">{loading?'wait...':'New'}</button>
                   </div>         
                </form>
            </div>
            </div>
    </div>
                
       
    </>
  )
}

export default NewProject