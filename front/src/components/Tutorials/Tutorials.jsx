import {HashtagIcon, LinkIcon, PlayIcon, QuestionMarkCircleIcon, EyeIcon, FireIcon, HeartIcon,ArrowDownIcon, VideoCameraIcon } from '@heroicons/react/24/outline'
import me from '../../assets/brandon.jpg'
import Nav from '../Nav/Nav'
import facebook from '../../assets/facebook.svg'
import youtube from '../../assets/youtube.svg'
import instagram from '../../assets/instagram.svg'
import { getTutorial, incrementView } from '../../../actions/actions'
import { useEffect, useState } from 'react'
import LoadingSpinnerComponent from 'react-spinners-components'
import { Link } from 'react-router-dom'


function Tutorials() {
    const [tutorials, setTutorials] = useState()
    const [loading, setLoading] = useState(true)
    const onYou = () =>{
        location.href='https://youtube.com/@brandonfidelindev?si=NJZwFzwdlm6fCd5A'
    }

    const onInsta = () =>{
        location.href='https://web.instagram.com/brandonfidelin.ravomanana'
    }

    const onFb = () => {
        location.href='https://web.facebook.com/brandonfidelin.ravomanana'
    }
    useEffect(() => {
        setLoading(true)
        getTutorial()
        .then(res=>setTutorials(res.data))
        .then(setLoading(false))
        .catch(err => console.log(err.message))
    })
    
  return (
    <>
    <Nav/>
            <h2 className=' mt-10 text-3xl text-gray-400 text-center'><LinkIcon className='w-7 h-7 inline text-violet-500'/>Join Me On</h2>
                <div className="mt-7 mx-auto  w-80 p-3 flex justify-around flex-wrap">
                    <div className="w h-4  flex justify-center items-center">
                        <img onClick={onYou} className='w-10 h-10' src={youtube} alt="" />
                    </div>
                    <div className="w h-4  flex justify-center items-center">
                        <img onClick={onInsta} className='w-10 h-10' src={instagram} alt="" />

                    </div>
                    <div className="w h-4  flex justify-center items-center">
                    <img onClick={onFb} src={facebook} alt="" />

                        </div>   
                </div>
            <h2 className=' mt-10 text-3xl text-gray-400 text-center'><VideoCameraIcon className='w-10 h-10 inline font-bold text-violet-500'/> Tutorials</h2>
            <div className=" mt-10 container-sm w-4/5 p-4 mx-auto flex flex-wrap justify-evenly gap-y-6 gap-x-3">
              {
                loading 
            ?<LoadingSpinnerComponent type='Spinner' color='blue' size={'100px'}/>
            
                
                :<Tuto tutorials={tutorials}/>
              }
                    
            </div>

    </>
  )
}


function Tuto({tutorials}){
    return (
        <>
            {
                tutorials?.map((tutorial, index) => (
                    <div key={index} data-aos="fade-up"
                    data-aos-anchor-placement="top-bottom" className="w-96 h-96 rounded border-none  shadow shadow-blue-700">
                    <div className=" relative w-2/2 h-2/3 border-b-2 border-gray-800 border-solid">
                    <Link onClick={() => incrementView(tutorial._id)} to={`/tutorials/view/${tutorial._id}`}><PlayIcon className='w-20 h-20 text-blue-800 absolute top-1/3 right-1/3 mx-5'/></Link>
                    <img src={`${tutorial.bg}`}  className='w-full h-full rounded-t-md rounded-b-none'/>
                    </div>
                    <div className="w-full h-1/3 p-2">
                        <h4 className="text-gray-500"><HashtagIcon className='w-7 h-7 inline text-violet-500'/>{tutorial.title}</h4>
                        <div className="w-full flex justify-around p-2 mt-5 ">
                            <button className='w-20 rounded border-2 text-white justify-center flex items-center border-gray-500 border-solid'>{tutorial.view?tutorial.view:'0'}<EyeIcon className='w-4 h-4 text-blue-500 inline mx-3'/></button>
                            <button className='w-20 rounded border-2 text-white justify-center flex items-center border-gray-500 border-solid'>{tutorial.like?tutorial.like:'0'}<HeartIcon className='w-4 h-4 text-red-500 inline mx-3'/></button>
                            <button className='w-20 rounded border-2 text-white justify-center flex items-center border-gray-500 border-solid'>{tutorial.download?tutorial.download:'0'}<ArrowDownIcon className='w-4 h-4 text-green-500 inline mx-3'/></button>         
                        </div>
                    </div>
                </div>
                ))
            }
                
        </>
    )
}

export default Tutorials
