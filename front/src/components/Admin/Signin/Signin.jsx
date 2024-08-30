import { useState } from 'react'
import {toast, ToastContainer} from 'react-toastify'
import Nav from '../../Nav/Nav'
import Form from '../Form/Form'
import { createAdmin } from '../../../../actions/actions'
import { KeyIcon } from '@heroicons/react/24/outline'
import 'react-toastify/dist/ReactToastify.css' 
function Signin() {
    const [data, setData] = useState()
    const handleChange = (e) => {
        const {name, value} = e.target
        setData((data) => ({...data, [name]:value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        createAdmin(data).then(res => res.data.type=='success'?toast.success(res.data.message):toast.error(res.data.message))
        .catch(err => console.log(err.message))
    }

  return (
    <>
        <Nav/>
        <h1 className="mt-10 text-center text-gray-400 text-4xl"><KeyIcon className='text-blue-400 w-10 h-10 inline'/>Admin</h1>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} to={'/admin/login'} text={'Sign In'}/>
        <ToastContainer/>
    </>
  )
}

export default Signin
