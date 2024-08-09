import React from 'react'
import { Link } from 'react-router-dom'
function Nav() {
  return (

    <>
  
        <header className="mb-auto ">
            <div>
                    <h3 className="float-md-start text-light mb-0">BrandonDEV.com</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <Link className="nav-link fw-bold py-1 px-0 active" aria-current="page">About</Link>
                        <Link className="nav-link fw-bold py-1 px-0" to={'/stacks&projects'}>Stacks & Projects</Link>
                        <Link className="nav-link fw-bold py-1 px-0" to={'/tutorials'}>Tutorials</Link>
                        <Link className="nav-link fw-bold py-1 px-0" >Contact</Link>
                    </nav>
            </div>
        </header>
    </>
  )
}

export default Nav