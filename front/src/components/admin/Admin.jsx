import React from 'react'

function Admin() {
  return (
    <>
        <div className="container mt-5 text-warning">
        <h1 className='mb-5'>Admin Login</h1>
        <div class="contact-container mt-5" style={{position:'relative', top:'2rem'}}>
                <div class="form-container">
                    <form >
                        <div>
                             <label for="pseudo">Access Name</label>
                            <input type="text" name="pseudo"  id="pseudo"/>
                        </div>
                        <div>
                            <label for="password">Password</label>
                           <input type="password" name="password"  id="password"/>
                       </div>
                   <div>
                    <button class="form-control btn btn-secondary">Login</button>
                   </div>
                       
                    </form>
                </div>
            </div>
    </div>
    
    </>
    
  )
}

export default Admin