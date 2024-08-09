import React from 'react'
import Nav from '../nav/Nav'
import About from '../about/About'
import Footer from '../footer/Footer'
function Container() {
  return (
    <>
    <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Nav/>
                <About/>
                <Footer/>
    </div>
    </>
  )
}

export default Container