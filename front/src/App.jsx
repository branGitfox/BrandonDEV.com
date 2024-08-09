import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import Tutorials from './components/tutorials/Tutorials'
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/stacks&projects' element={<Skills/>}/>
              <Route  path='/tutorials' element={<Tutorials/>}/>
              <Route path='*'/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
