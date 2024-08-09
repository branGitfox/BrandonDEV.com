import React from 'react'
import brandon from '../../assets/brandon.jpg'
function About() {
  return (
    <>
            <main class="px-3">
                <h1 class="text-light">Ravomanana Brandon Fidelin.</h1>
                <p class="lead text-secondary">I'm 20, Full Stack Developer. I'm a third year CS student at ISPM University from Madagascar. I wish my profil 'll interest you and enjoy the visit. </p>
                <p class="lead">
                    <div class="profil-container">
                        <img src={brandon} alt=""/>
                    </div>
                </p>
            </main>
    </>
  )
}

export default About