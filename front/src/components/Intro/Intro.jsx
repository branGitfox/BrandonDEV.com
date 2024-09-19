
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
            <a href='https://export-download.canva.com/2E9vA/DAGQV62E9vA/26/0-7808556949619759977.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAJHKNGJLC2J7OGJ6Q%2F20240918%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20240918T075141Z&X-Amz-Expires=81481&X-Amz-Signature=816cd9553b5b2e7c149e85121d897c89cf3739ce6f62eb108a26e686e4706a14&X-Amz-SignedHeaders=host&response-content-disposition=attachment%3B%20filename%2A%3DUTF-8%27%27CV%2520professionnel%2520charg%25C3%25A9%2520de%2520communication%2520moderne%2520bleu.pdf&response-expires=Thu%2C%2019%20Sep%202024%2006%3A29%3A42%20GMT' Download className='p-3 font-bold text-gray-900 bg-blue-600 shadow shadow-blue-600'>Download CV <ArrowDownIcon className='h4 w-4 inline'/></a>
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
