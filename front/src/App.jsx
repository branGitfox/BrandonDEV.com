
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Stacks from './components/Stacks/Stacks'
import Tutorials from './components/Tutorials/Tutorials'
import Projects from './components/Projects/Projects'
import Login from './components/Admin/Login/Login'
import ProjectForm from './components/Projects/ProjectForm/ProjectForm'
import TutorielsForm from './components/Tutorials/TutorielsForm/TutorielsForm'
import Signin from './components/Admin/Signin/Signin'
import View from './components/Tutorials/View/View'
import About from './components/About/About'
import NotFound from './components/404/NotFound'
function App() {
  return (
    <>
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Home />}/>
              <Route path='/stacks' element={<Stacks />}/>
              <Route path='/tutorials' element={<Tutorials />}/>
              <Route path='/tutorials/view/:id' element={<View />}/>
              <Route path='/projects' element={<Projects />}/>
              <Route path='/admin/login' element={<Login/>}/>
              <Route path='/admin/signin' element={<Signin/>}/>
              <Route path='/backend/newProject' element={<ProjectForm/>}/>
              <Route path='/backend/newTutorials' element={<TutorielsForm/>}/>
              <Route path='/about' element={<About/>}/>
              <Route path='*' element={<NotFound/>}/>
        
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
