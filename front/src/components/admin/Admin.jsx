import React, { useState } from 'react'
import { login } from '../../../actions/actions'
import {toast, ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



function Admin() {
    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        const {name,value} = e.target

        setFormData((formData) => ({...formData , [name]:value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await login('http://localhost:3000/api/admin/logAdmin', formData).
        then(res => res.data.type=='success'?toast.success(res.data.message)
        :toast.error(res.data.message))
        .catch(err => toast.error(err.message))
        
       
    }
  return (
    <>
        <div className="container mt-5 text-warning">
        <h1 className='mb-5'>Admin Login</h1>
        <div class="contact-container mt-5" style={{position:'relative', top:'2rem'}}>
                <div class="form-container">
                    <form onSubmit={handleSubmit}>
                        <div>
                             <label for="pseudo">Access Name</label>
                            <input type="text" name="pseudo" onChange={handleChange}  id="pseudo"/>
                        </div>
                        <div>
                            <label for="password">Password</label>
                           <input type="password" name="password" onChange={handleChange}  id="password"/>
                       </div>
                   <div>
                    <button class="form-control btn btn-secondary">Login</button>
                   </div>
                       
                    </form>
                </div>
            </div>
    </div>
        <ToastContainer/>
    
    </>
    
  )
}

export default Admin