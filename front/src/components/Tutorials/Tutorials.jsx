import {HashtagIcon, LinkIcon, PlayIcon, QuestionMarkCircleIcon, EyeIcon, FireIcon, HeartIcon,ArrowDownIcon } from '@heroicons/react/24/outline'
import me from './brandon.jpg'

function Tutorials() {
  return (
    <>
            <h2 className=' mt-10 text-3xl text-gray-400 text-center'><LinkIcon className='w-7 h-7 inline text-violet-500'/>Join Me On</h2>
                <div className="mt-3 mx-auto  w-80 p-3 flex justify-around flex-wrap">
                    <div className="w h-4 border-solid border-2 border-gray-500 flex justify-center items-center">Youtube</div>
                    <div className="w h-4 border-solid border-2 border-gray-500 flex justify-center items-center">Instagram</div>
                    <div className="w h-4 border-solid border-2 border-gray-500 flex justify-center items-center">Facebook</div>   
                </div>
            <h2 className=' mt-10 text-3xl text-gray-400 text-center'><HashtagIcon className='w-7 h-7 inline font-bold text-violet-500'/>Tutorials</h2>
            <div className=" mt-10 container-sm w-4/5 p-4 mx-auto flex flex-wrap justify-evenly gap-y-4">
                <div className="w-96 h-96 rounded border-none  shadow shadow-purple-700">
                    <div className=" relative w-2/2 h-2/3 border-b-2 border-gray-800 border-solid">
                    <PlayIcon className='w-20 h-20 text-blue-800 absolute top-1/3 right-1/3'/>
                    <img src={me}  className='w-full h-full rounded-t-md rounded-b-none'/>
                    </div>
                    <div className="w-full h-1/3 p-2">
                        <h4 className="text-gray-500"><QuestionMarkCircleIcon className='w-7 h-7 inline text-violet-500'/>How to Learn Tech</h4>
                        <div className="w-full flex justify-around p-2 mt-5 ">
                            <button className='w-20 rounded border-2 text-white justify-center flex items-center border-gray-500 border-solid'>12<EyeIcon className='w-4 h-4 text-blue-500 inline mx-3'/></button>
                            <button className='w-20 rounded border-2 text-white justify-center flex items-center border-gray-500 border-solid'>12<HeartIcon className='w-4 h-4 text-red-500 inline mx-3'/></button>
                            <button className='w-20 rounded border-2 text-white justify-center flex items-center border-gray-500 border-solid'>12<ArrowDownIcon className='w-4 h-4 text-green-500 inline mx-3'/></button>         
                        </div>
                    </div>
                </div>
                    
            </div>

    </>
  )
}

export default Tutorials