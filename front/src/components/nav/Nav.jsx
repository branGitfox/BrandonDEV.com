import React from 'react'
import { Link } from 'react-router-dom'
function Nav({active}) {
  return (

    <>
  
        <header className="mb-auto " id='nav'>
            <div>
                    <h3 className="float-md-start text-light mb-0">BrandonDEV.com</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <Link className={"nav-link fw-bold py-1 px-0"+(active=='about'?' active':'')} aria-current="page" to={'/'}>About</Link>
                        <Link className={"nav-link fw-bold py-1 px-0"+(active=='stacks&projects'?' active':'')} to={'/stacks&projects'}>Stacks & Projects</Link>
                        <Link className={"nav-link fw-bold py-1 px-0"+(active=='tutorials'?' active':'')} to={'/tutorials'}>Tutorials</Link>
                        <Link className={"nav-link fw-bold py-1 px-0"+(active=='contact'?' active':'')} to={'/contact'} >Contact</Link>
                    </nav>
            </div>
        </header>
    </>
  )
}

export default Nav