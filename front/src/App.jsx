import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import Tutorials from './components/tutorials/Tutorials'
import Contact from './components/contact/Contact'
import NotFound from './components/404/NotFound'
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/stacks&projects' element={<Skills/>}/>
              <Route  path='/tutorials' element={<Tutorials/>}/>
              <Route  path='/contact' element={<Contact/>}/>
              
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
