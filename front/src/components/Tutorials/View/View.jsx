import { HeartIcon, ArrowDownIcon,QuestionMarkCircleIcon, ArrowLeftIcon} from "@heroicons/react/24/outline"

function View() {
  return (
    <>
        <div className="w-2/3 mt-5  mx-auto">
            <video className='w-full shadow shadow-blue-700 h-3/5 border-none rounded mx-auto' controls src="" ></video>
            <div className="mt-5 ">
                <a href="" className='p-2 bg-blue-400 font-md rounded'>Download <ArrowDownIcon className="w-5 h-5 inline text-blue-500"/></a>
                <button className='p-2 bg-red-300   font-md mx-2 rounded'>Leave a <HeartIcon className="w-5 h-5 inline text-red-500"/></button>
            </div>
            <div className="mt-5">
                <h4 className="text-gray-500"><QuestionMarkCircleIcon className='w-7 h-7 inline text-violet-500'/>How to Learn Tech</h4>
                <p className="mt-2 text-gray-400 font-extralight">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam earum reprehenderit sed itaque modi ipsam iste quae quisquam quaerat odit! Perspiciatis numquam enim vel aliquam tempora itaque quos reprehenderit! Amet!
                </p>
            </div>
        </div>
        <ArrowLeftIcon className="text-blue-400 w-5 h-5 absolute top-20 mx-5"/>

    </>
  )
}

export default View