import {HashtagIcon, LinkIcon, PlayIcon, ClipboardDocumentListIcon, EyeIcon, InformationCircleIcon, HeartIcon, WifiIcon , NewspaperIcon, CommandLineIcon} from '@heroicons/react/24/outline'
import Nav from '../Nav/Nav'
import { useEffect, useState } from 'react'
import LoadingSpinnerComponent from 'react-spinners-components'
import { getProject, protect } from '../../../actions/actions'
import { useNavigate } from 'react-router-dom'
function Projects() {
    const [loading, setLoading] = useState(true)
    const [projects, setProjects] = useState(null)


    useEffect(() => {    
        setLoading(true)
        getProject().then(res => {
            setProjects(res.data)
        }).then(setLoading(false)).catch(err => console.log(err.message))
    })
  return (

    <>
    <Nav/>
  
        <h2 className=' mt-10 text-3xl text-gray-400 text-center'><NewspaperIcon className='w-7 h-7 inline text-violet-500'/> Projects</h2>


            <div className=" mt-10 container-sm w-4/5 h-auto p-4 mx-auto flex flex-wrap justify-evenly gap-x-3 gap-y-10">
            {loading==true && projects==null?
            <LoadingSpinnerComponent type='Spinner' color='blue' size={'100px'}/>
            :<Project projects={projects}/>}
                
                    
            </div>
    </>
  )
}

function Project({projects}) {
    return (
        <>
        {
            projects?.map((project, index) => (
                <div key={index} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom" className="w-96  rounded border-none  shadow shadow-blue-700 ">
                    <div className=" relative w-2/2 border-b-2 border-gray-800 border-solid">
                        <img src={project?.image}  className='w-full h-full rounded-t-md rounded-b-none'/>
                    </div>
                    <div className=" w-full  p-2">
                        <h4 className="text-gray-500"><InformationCircleIcon className='w-7 h-7 inline text-violet-500'/> {project?.name}</h4>
                        <p className="text-gray-400  mx-2 mt-3 mb-3 font-light">{project?.description}</p>
                        <h4 className="text-gray-500"><ClipboardDocumentListIcon className='w-7 h-7 inline text-violet-500'/> Stacks</h4>
                        <p className="text-gray-400 font-light mx-2 mt-3 mb-1">{project?.stacks}</p>
                     
                    
                    </div>
                       <div className="w-full flex justify-around p-2 mt-2">
                                <a href={project?.site} className='w-20 rounded border-2 text-white justify-center  flex items-center border-gray-500 border-solid'>Live<WifiIcon className='w-5 h-5 text-blue-500 inline mx-1'/></a>
                               <a href={project?.source} className='w-20 rounded border-2 text-white justify-center  flex items-center border-gray-500 border-solid'>Code<CommandLineIcon className='w-5  h-5 text-green-500 inline mx-1'/></a>     
                         </div>
            </div>
            ))
        }
          
        </>
    )
}
export default Projects
