import React from 'react'
import Nav from '../Nav/Nav'

const fronts = [
    {name:'HTML', logo:'/html.png'},
    {name:'CSS', logo:'/csss.jfif'},
    {name:'JavaScript', logo:'/javascript.png'},
    {name:'Ajax', logo:'/ajax.jfif'},
    {name:'React', logo:'/react.svg'},
    {name:'Bootstrap', logo:'/bootstrap.jfif'},
    {name:'Tailwind', logo:'/tailwind.png'},
]

const backs = [
    {name:'PHP', logo:'/php.png'},
    {name:'Node js', logo:'/nodejs.png'},
    {name:'Express', logo:'/express.png'},
    {name:'Mysql', logo:'/mysql.png'},
    {name:'MongoDb', logo:'/mongodb.png'},
]

const tools = [
    {name:'Git', logo:'/git.png'},
    {name:'Insomia', logo:'/insomnia.jfif'},
    {name:'Vs Code', logo:'/vscode.jfif'},
    {name:'Docker', logo:'/docker.png'},
]

const others = [
    {name:'Window', logo:'/window.png'},
    {name:'Linux', logo:'/linux.png'},
]

function Stacks() {
  return (
    <>
        <Nav/>
        <div className="mt-5 mx-auto p-5">
            <h2 className='text-3xl text-gray-400 text-center'>Stacks</h2>
            <div className="mt-5 w-80 mx-auto"> 
                <div className="p-1 border-solid border-b-2 border-gray-700">
                    <h4 className="text-white">Front-End</h4>
                </div>
                <div className=" mt-3 p-1 flex flex-wrap justify-evenly gap-3">
                    {
                        fronts.map((front, index) => <div key={index} className="text-gray-400 rounded-md h-4 w flex justify-center p-5 items-center border-solid border-2 border-blue-900">
                        <img className='w-4 h-4 mx-2 ' src={front.logo} alt="" />
                        {front.name}
                    </div> )
                    }
               
                </div>
            </div>
            <div className="mt-5 w-80 mx-auto"> 
                <div className="p-1 border-solid border-b-2 border-gray-700">
                    <h4 className="text-white">Back-End</h4>
                </div>
                <div className=" mt-3 p-1 flex flex-wrap justify-evenly gap-3">
                    {
                        backs.map((back, index) => <div key={index} className="text-gray-400 rounded-md h-4 w flex justify-center p-5 items-center border-solid border-2 border-blue-900">
                        <img className='w-4 h-4 mx-2 ' src={back.logo} alt="" />
                        {back.name}
                    </div> )
                    }
               
                </div>
            </div>
            <h2 className='mt-5 text-3xl text-gray-400 text-center'>Tools</h2>
            <div className="mt-5 w-80 mx-auto"> 
                <div className="p-1 border-solid border-b-2 border-gray-700">
                    <h4 className="text-white">DevTools</h4>
                </div>
                <div className=" mt-3 p-1 flex flex-wrap justify-evenly gap-3">
                    {
                        tools.map((tool, index) => <div key={index} className="text-gray-400 rounded-md h-4 w flex justify-center p-5 items-center border-solid border-2 border-blue-900">
                        <img className='w-4 h-4 mx-2 ' src={tool.logo} alt="" />
                        {tool.name}
                    </div> )
                    }
               
                </div>
            </div>
            <div className="mt-5 w-80 mx-auto"> 
                <div className="p-1 border-solid border-b-2 border-gray-700">
                    <h4 className="text-white">Others</h4>
                </div>
                <div className=" mt-3 p-1 flex flex-wrap justify-evenly gap-3">
                    {
                        others.map((other, index) => <div key={index} className="text-gray-400 rounded-md h-4 w flex justify-center p-5 items-center border-solid border-2 border-blue-900">
                        <img className='w-4 h-4 mx-2 rounded-lg ' src={other.logo} alt="" />

                        {other.name}
                    </div> )
                    }
               
                </div>
            </div>
        </div>
    </>
  )
}

export default Stacks