
import Nav from '../Nav/Nav'

const fronts = [
    {name:'HTML', logo:'/html.svg'},
    {name:'CSS', logo:'/css.svg'},
    {name:'JavaScript', logo:'/javascript.png'},
    {name:'React', logo:'/react.svg'},
    {name:'Bootstrap', logo:'/bootstrap.svg'},
    {name:'Tailwind', logo:'/tailwind.svg'},
]

const backs = [
    {name:'PHP', logo:'/php.svg'},
    {name:'Node js', logo:'/nodejs.svg'},
    {name:'Express', logo:'/express.svg'},
    {name:'Mysql', logo:'/mysql.svg'},
    {name:'MongoDb', logo:'/mongodb.svg'},
    {name:'Ajax', logo:'/ajax.jfif'},
]

const tools = [
    {name:'Git', logo:'/git.svg'},
    {name:'Insomia', logo:'/insomnia.svg'},
    {name:'Vs Code', logo:'/vscode.svg'},
    {name:'Docker', logo:'/docker.svg'},
]

const others = [
    {name:'Windows', logo:'/windows.svg'},
    {name:'Linux', logo:'/linux.svg'},
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
                        <img className='w-6 h-6 mx-2 ' src={front.logo} alt="" />
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
                        <img className='w-6 h-6 mx-2 ' src={back.logo} alt="" />
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
                        <img className='w-6 h-6 mx-2 ' src={tool.logo} alt="" />
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
                        <img className='w-6 h-6 mx-2 ' src={other.logo} alt="" />

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
