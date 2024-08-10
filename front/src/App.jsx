import { useState } from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Skills from './components/skills/Skills'
import Tutorials from './components/tutorials/Tutorials'
import Contact from './components/contact/Contact'
import NotFound from './components/404/NotFound'
import CreateAdmin from './components/createAdmin/CreateAdmin'
import LogAdmin from './components/admin/LogAdmin'
import Admin from './components/admin/Admin'
import NewProject from './components/admin/settings/NewProject'
import NewStack from './components/admin/settings/NewStack'
import NewTutorial from './components/admin/settings/NewTutorial'
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/stacks&projects' element={<Skills/>}/>
              <Route  path='/tutorials' element={<Tutorials/>}/>
              <Route  path='/contact' element={<Contact/>}/>
              <Route path='/admin/logIn' element={<LogAdmin/>}/>
              <Route path='/admin/create' element={<CreateAdmin/>}/>
              <Route path='/admin/page' element={<Admin/>}/>
              <Route path='/admin/logged/newProject' element={<NewProject/>}/>
              <Route path='/admin/logged/newTutorial' element={<NewStack/>}/>
              <Route path='/admin/logged/newStack' element={<NewTutorial/>}/>
              <Route path='*' element={<NotFound/>}/>
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
