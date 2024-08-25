import {toast, ToastContainer} from 'react-toastify'
import { KeyIcon } from '@heroicons/react/24/outline'
import { login } from '../../../../actions/actions'

import { useEffect, useState } from 'react'
import Nav from '../../Nav/Nav'
import Form from '../Form/Form' 
import 'react-toastify/dist/ReactToastify.css'
import { useNavigate } from 'react-router-dom'
function Login() {
    const [data, setData] = useState()
    const handleChange = (e) => {
        const {name, value} = e.target
        setData((data) => ({...data, [name]:value}))
    }
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        login(data).then(res => res.data.type=='error'?toast.error(res.data.message):localStorage.setItem('admin', JSON.stringify(res.data)))
        .catch(err => console.log(err.message))
        toast.success('Admin logged')
       setTimeout(()=>{
        navigate('/')
       }, 2000) 
    }

    // useEffect(() => {
    //     if(localStorage.getItem('admin') !=''){
    //        
    //     }
    // })
    
  return (
    <>
        <Nav/>
        <h1 className="mt-10 text-center text-gray-400 text-4xl"><KeyIcon className='text-blue-400 w-10 h-10 inline'/> Admin </h1>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} to={'/admin/signin'} text='Login'/>
        <ToastContainer/>
    </>
  )
}

export default Login