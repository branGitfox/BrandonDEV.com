
import { Link } from 'react-router-dom'
function Form({text, to, handleChange, handleSubmit}) {


  return (
    <>
        <div className="mt-4">
            <form onSubmit={handleSubmit} className='w-4/5 p-3 mx-auto' >
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Pseudo</label>
                    <input onChange={handleChange} name='pseudo' type="text" className='border bg-transparent text-blue-400 rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <label htmlFor="" className='text-gray-400 mx-2'>Password</label>
                    <input onChange={handleChange} type="password" name='password' className='border text-blue-400 bg-transparent rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <input  type="submit" value={text} className='border-none bg-blue-700 text-white font-bold rounded p-2 w-full mt-2 border-blue-400'/>
                </div>
                <div className=" w-full mt-2 mb-3 mx-auto">
                    <Link to={to} className='underline  text-blue-700 decoration decoration-blue-700 decoration-dotted'>{to=='/admin/signin'?'Create':'Login'} Admin</Link>
                </div>
            </form>
        </div>
    </>
  )
}

export default Form