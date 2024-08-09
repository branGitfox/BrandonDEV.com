import React from 'react'
import Nav from '../nav/Nav'

function Contact() {
  return (
   <>
    <div class="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Nav active={'contact'}/>
        <div class="contact-container">
                <h3 class="text-white">Send Mail</h3>
                <div class="form-container">
                    <form >
                        <div>
                             <label for="email">Email</label>
                            <input type="email" name="email"  id="email"/>
                        </div>
                        <div>
                            <label for="object">Object</label>
                           <input type="email" name="object"  id="object"/>
                       </div>

                    <div>
                        <label for="message">Message</label>
                       <textarea  name="message"  id="message"></textarea>
                   </div>
                   <div>
                    <button class="form-control btn btn-secondary">Send</button>
                   </div>
                       
                    </form>
                </div>
            </div>
    </div>
    

   </>
  )
}

export default Contact