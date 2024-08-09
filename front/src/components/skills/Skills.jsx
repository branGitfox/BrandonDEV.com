import React from 'react'
import Projects from '../projects/Projects'
import Stacks from '../stacks/Stacks'
import Nav from '../nav/Nav'
function Skills() {
  return (
    <>
      <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
          <Nav active={'stacks&projects'}/>
          <Stacks/>
          <Projects/>
      </div>
    </>
  )
}

export default Skills