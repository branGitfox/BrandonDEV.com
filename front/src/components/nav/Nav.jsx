import React from 'react'

function Nav() {
  return (

    <>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <header className="mb-auto ">
            <div>
                    <h3 className="float-md-start text-light mb-0">BrandonDEV.com</h3>
                    <nav className="nav nav-masthead justify-content-center float-md-end">
                        <a className="nav-link fw-bold py-1 px-0 active" aria-current="page" href="#">About</a>
                        <a className="nav-link fw-bold py-1 px-0" href="#">Stacks & Projects</a>
                        <a className="nav-link fw-bold py-1 px-0" href="#">Tutorials</a>
                        <a className="nav-link fw-bold py-1 px-0" href="#">Contact</a>
                    </nav>
            </div>
        </header>
    </div>
    </>
  )
}

export default Nav