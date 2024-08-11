import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
function NewProject() {

    const [name, setName]=useState('')
    const [desc, setDesc]=useState('')
    const [site, setSite]=useState('')
    const [source, setSource]=useState('')
    const [image, setImage]=useState('')
    const [garanty, setGaranty]=useState('')
    const [stacks, setStacks]=useState('')

    const navigate = useNavigate()
    const [loading, setIsLoading] = useState(false)
    const [file, setFile]=useState(null)

    
    
    
    
    
    const handleSubmit = async (e) => {
        e.preventDefault() 
        const formData = new FormData ()
        formData.append(name, name); 
        formData.append("description", desc)
        formData.append("site", site)
        formData.append("source", source)
        formData.append("image", image)
        formData.append('garanty', garanty)
        formData.append("stacks", stacks)

        setIsLoading(true)
      

    }




    
    
  return (
    <>
        <div className="container mt-5">

                <h1 className='text-white'>New Project</h1>
                <div className="contact-container mt-5" style={{position:'relative', top:'2rem'}}>
                <div className="form-container">
                    {/* <form> */}
                        <div>
                            <label htmlFor="project">Project Name</label>
                            <input type="text" name="project" value={name} onChange={(e) =>setName(e.target.value)}  id="project"/>
                        </div>
                        <div>
                            <label htmlFor="desc">Project Description</label>
                           <textarea  name="desc" value={desc} onChange={(e) =>setDesc(e.target.value)}  id="desc"></textarea>
                       </div>
                       <div>
                             <label htmlFor="site">Project Link</label>
                            <input type="text" name="site" value={site} onChange={(e) =>setSite(e.target.value)}  id="site"/>
                        </div>
                        <div>
                             <label htmlFor="Source">Project Source</label>
                            <input type="text" name="Source" value={source} onChange={(e) =>setSource(e.target.value)}  id="Source"/>
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
                            <input type="text" name="stacks" value={stacks} onChange={(e) =>setStacks(e.target.value)}  id="stacks"/>
                        </div>
                   <div>
                        <button onClick={handleSubmit} className="form-control btn btn-secondary">{loading?'wait...':'New'}</button>
                   </div>         
                {/* </form> */}
            </div>
            </div>
    </div>
                
       
    </>
  )
}

export default NewProject