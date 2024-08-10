import React from 'react'
import { Link } from 'react-router-dom'
function Admin() {
  return (
    <>
        <div className="container mt-5">
            <h1 className='text-primary'>Admin page</h1>
            <div className="container mt-5 ">
                <Link className='btn btn-primary mx-1'>New Project</Link>
                <Link className='btn btn-success mx-1'>New Tutorial</Link>
                <Link className='btn btn-info mx-1'>New Stacks&Tools</Link>
                <Link className='btn btn-secondary mx-1'>Dashboard</Link>
            </div>
        </div>
    </>
  )
}

export default Admin