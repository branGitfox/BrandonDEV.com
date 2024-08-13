import React, { useEffect, useState } from 'react'
import { getProject } from '../../../actions/actions'

import axios from 'axios'
function Projects() {
    const [projects, setProjects] = useState()
    const [isLoading, setIsloading] = useState(false)

    const getProjects = async () => {
        setIsloading(true)
        await axios.get('http://localhost:3000/api/project')
        .then(res => setProjects(res.data))
        .then(setIsloading(false))
        .catch(err => console.log(err.message))
    }

useEffect(() => {
    getProjects()
}, [])



  return (
         <>
         <div class="projects">
          
             <h4 class="text-white">Projects</h4>
             <div class="projects-container">
                {isLoading?('loading...'):(<Project projects={projects}/>)}
             </div>
            
        </div>
    </>
  )
}

const Project = ({projects}) => {
    return (
        <>
            {
                    projects?.map((project, index) => (
                        <div className="project" key={index}>
                        <div className="project-info">
                            <h5 className="project-name">{project.name}</h5>
                            <p className="project-desc text-light">
                               {project.description}
                            </p>
                            <h5 className="project-name">Stacks</h5>
                            <p className="stacks-list project-desc text-light">{project.stacks}</p>
                            <hr/>
                            <button className="btn btn-primary mx-1">Demo</button>
                            <button className="btn btn-outline-secondary">Source</button>
                        </div>
                        <div style={{backgroundImage:`url(http://localhost:3000/images/${project.image})`}} className="project-images">
                           
                        </div>
                    </div>
                    ))
                }
        </>
    )
}

export default Projects