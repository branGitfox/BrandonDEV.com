import React from 'react'
import { Link } from 'react-router-dom'
function Admin() {
  return (
    <>
        <div className="container mt-5">
            <h1 className='text-warning'>Admin(<span className='text-success'>BranGitFox</span>)</h1>
            <div className="container d-flex justify-content-center mt-5">      
                <Link className='mx-1' to={'/admin/logged/newProject'}>Project</Link>
                <Link className='mx-1' to={'/admin/logged/newTutorial'}>Tutorials</Link>
                <Link className='mx-1' to={'/admin/logged/newStack'}>Stacks</Link>
                <Link className='mx-1' to={'/admin/logged/'}>Dashboard</Link>
            </div>
        </div>
    </>
  )
}

export default Admin