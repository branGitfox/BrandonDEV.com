import React from 'react'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
function NotFound() {
  return (
    <>
      <Nav/>
    <div className='mt-5 '>
        <h1 className='text-red-400 font-bold text-4xl' >404 Not Found</h1>
        <p className='text-orange-400 font-base' >*la page que vous essayer d'acceder n'existe pas </p>
        <p className='text-orange-400 font-base' >*The page which you're trying to access doesn't exist </p>
        <p  className='text-orange-400 font-base' >*Tsy miexista ilay pejy tiano ho jerena</p>
        <img src="" alt="" />
        <Link className='text-blue-900 underline decoration-dotted decoration-blue-400' to={'/'}>Return to a valid page</Link>
    </div>
    </>
    
  )
}

export default NotFound
