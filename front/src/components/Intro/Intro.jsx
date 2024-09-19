
import {ArrowRightIcon , ArrowDownIcon} from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import me from '../../assets/brandon.jpg'
import gmail from '../../assets/gmail.svg'
import linkedin from '../../assets/linkedin.svg'

function Intro() {
  const onMail=()=>{
    location.href='mailto:vixfgit@gmail.com'
  }

  const onLinkedIn=()=>{
    location.href='https://www.linkedin.com/in/brandon-fidelin-ravomanana-59157b281?trk=contact-info'
  }
  return (
    <>
<div className="mt-5">
      <h1 className=" p-5 text-blue-600 text-5xl text-center mt-20 font-bold">Ravomanana <span className='text-blue-400  underline decoration-dotted decoration-blue'>Brandon</span> Fidelin</h1>
      <img
          alt=""
          src={me}
          className="h-40 w-40 rounded-full mx-auto mt-10"
      />

      <p className='mt-5 text-white font-100 text-3xl text-center'>Full Stack Developer</p>
        <div className="mt-10 mx-auto flex justify-center gap-x-3">
            <Link to={'about'} className='p-3  border-solid border-dashed border-2 border-blue-800  text-blue-600'>About <ArrowRightIcon aria-hidden="true" className="h-4 w-4 inline"/></Link>
            <a href='CV professionnel chargé de communication moderne bleu 2.png' Download className='p-3 font-bold text-gray-900 bg-blue-600 shadow shadow-blue-600'>Download CV <ArrowDownIcon className='h4 w-4 inline'/></a>
        </div>
    </div>
    <div className="mt-10 w-10 mx-auto flex justify-between gap-x-2">
        <img style={{cursor:'pointer'}} onClick={onMail} src={gmail} className='w-6 h-7 ' alt="" />
        <img style={{cursor:'pointer'}} onClick={onLinkedIn} src={linkedin} className='w-6 h-7' alt="" />
    </div>
    </>
  )
}

export default Intro
