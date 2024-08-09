import React from 'react'
import Nav from '../nav/Nav'
function Tutorials() {
  return (
    <>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav active='tutorials'/>
                <div class="container stack">
            <h4 class="text-light">Join me on</h4>
            <div class="container tech w-75  p-3">

            </div>
        </div>

        <div class="projects">
          
             <h4 class="text-white">Tutorials</h4>
             <div class="projects-container">
                    <div class="project ">
                        <div class="project-info">
                            <h5 class="project-name">#How to use multer with Node.js</h5>
                            <p class="project-desc text-light">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi deleniti fugiat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facilis magni. Vitae tempore ipsa asperiores nostrum esse sed ullam eveniet, omnis a possimus quas magnam neque quam quidem, debitis eius!
                            </p>
                            <h5 class="project-name">Utils</h5>
                            <p class="stacks-list project-desc text-light">VsCode, epxress, js, Node.js</p>
                            <hr/>
                            <button class="btn btn-primary">Download</button>
                            <button class="btn btn-outline-warning">Star</button>
                        </div>
                        <div class="project-images">
                           
                        </div>
                    </div>
                    <div class="project ">
                        <div class="project-info">
                            <h5 class="project-name">Nom du projet</h5>
                            <p class="project-desc text-light">
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi deleniti fugiat.
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, facilis magni. Vitae tempore ipsa asperiores nostrum esse sed ullam eveniet, omnis a possimus quas magnam neque quam quidem, debitis eius!
                            </p>
                            <h5 class="project-name">Utils</h5>
                            <p class="stacks-list project-desc text-light">VsCode, epxress, js, Node.js</p>
                            <hr/>
                            <button class="btn btn-primary">Download</button>
                            <button class="btn btn-outline-warning">Star</button>
                        </div>
                        <div class="project-images"></div>
                    </div>
             </div>
            
        </div>
    </div>
        
    </>
  )
}

export default Tutorials