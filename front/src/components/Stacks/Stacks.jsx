import React from 'react'
import Nav from '../Nav/Nav'
const fronts = [
    {name:'HTML', logo:''},
    {name:'CSS', logo:''},
    {name:'JavaScript', logo:''},
    {name:'Ajax', logo:''},
    {name:'React', logo:''},
    {name:'Bootstrap', logo:''},
    {name:'Tailwind', logo:''},
]

const backs = [
    {name:'PHP', logo:''},
    {name:'Node js', logo:''},
    {name:'Express', logo:''},
    {name:'Mysql', logo:''},
    {name:'MongoDb', logo:''},
]

const tools = [
    {name:'Git', logo:''},
    {name:'Insomia', logo:''},
    {name:'Vs Code', logo:''},
    {name:'Docker', logo:''},
]

const others = [
    {name:'Window', logo:''},
    {name:'Linux', logo:''},
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