import {HashtagIcon, LinkIcon, PlayIcon, ClipboardDocumentListIcon, EyeIcon, InformationCircleIcon, HeartIcon, WifiIcon , NewspaperIcon, CommandLineIcon} from '@heroicons/react/24/outline'
import me from './brandon.jpg'
//import { Audio } from 'react-loader-spinner'
//<Audio height="80" width="80" radius="9" color="green" ariaLabel="loading" wrapperStyle wrapperClass/>
function Projects() {
  return (
    <>
        <h2 className=' mt-10 text-3xl text-gray-400 text-center'><NewspaperIcon className='w-7 h-7 inline text-violet-500'/> Projects</h2>


            <div className=" mt-10 container-sm w-4/5 p-4 mx-auto flex flex-wrap justify-evenly gap-y-4">
                <div className="w-96 h rounded border-none  shadow shadow-purple-700 ">
                    <div className=" relative w-2/2 h-2/4 border-b-2 border-gray-800 border-solid">
                    <img src={me}  className='w-full h-full rounded-t-md rounded-b-none'/>
                    </div>
                    <div className="w-full h-1/3 p-2">
                        <h4 className="text-gray-500"><InformationCircleIcon className='w-7 h-7 inline text-violet-500'/> How to Learn Tech</h4>
                        <p className="text-gray-400 mx-2 mt-3 mb-3 font-light">lorem Lorem ipsum dolor sit amet repellat fugit facilis soluta cumque tempore, amet quos libero voluptate eveniet!</p>
                        <h4 className="text-gray-500"><ClipboardDocumentListIcon className='w-7 h-7 inline text-violet-500'/> Stacks</h4>
                        <p className="text-gray-400 font-light mx-2 mt-3 mb-3">PHP, Mysql, Ajax, JavaScript, Bootstrap</p>

                        <div className="w-full flex justify-around p-2 mt-5">
                            <button className='w-20 rounded border-2 text-white justify-center  flex items-center border-gray-500 border-solid'>Live<WifiIcon className='w-5 h-5 text-blue-500 inline mx-1'/></button>
                            <button className='w-20 rounded border-2 text-white justify-center  flex items-center border-gray-500 border-solid'>Code<CommandLineIcon className='w-5  h-5 text-green-500 inline mx-1'/></button>
                           
                        </div>
                    </div>
                </div>
                    
            </div>
    </>
  )
}

export default Projects