import { FlagIcon, ArrowLeftIcon, BookOpenIcon, LanguageIcon, StarIcon, IdentificationIcon, MapIcon} from "@heroicons/react/24/outline"
import { Link } from "react-router-dom"
import Nav from "../Nav/Nav"

function About() {
  return (
    <>
    <Nav/>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mt-10 border-none rounded w-4/5 mx-auto p-3 shadow shadow-blue-700">
            <h3 className="text-gray-400 font-bold"><IdentificationIcon className="w-5 h-5 inline text-violet-500"/> Who am I? </h3>
            <div className="mt-3  p-5">
                <p className="font-xs text-gray-300">
                    I'm a software Engeneer student at ISPM (Institute Superior Polytechnic of Madagascar) in my third years now, 20 years old.
                    Dynamic, fast,  used to work in pression and self thought, indeed the right person for You. In my spare time, i like  coding, eating, listening music and playing basketball.
                </p>
            </div>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mt-10 border-none rounded w-4/5 mx-auto p-3 shadow shadow-blue-700">
            <h3 className="text-gray-400 font-bold"><BookOpenIcon className="w-5 h-5 inline text-violet-500"/> Degrees </h3>
            <div className="mt-3  p-5">
                <ul className="font-xs  text-gray-300">
                        <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> Licence</li>
                        <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> Bachelor degree in 2021</li>
                        <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> BEPC degree  in 2018</li>          
                </ul>
            </div>
        </div>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mt-10 border-none rounded w-4/5 mx-auto p-3 shadow shadow-blue-700">
            <h3 className="text-gray-400 font-bold"><FlagIcon className="w-5 h-5 inline text-violet-500"/> Experiences</h3>
            <div className="mt-3  p-5">
                    <ul className="font-xs text-gray-300">
                            <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> Web Developer Certification at DTC web 2023</li>
                            <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/>Two months stage at Society Tavaratra 2023</li>
                            <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> Looking for a new Stage for Licence</li>          
                    </ul>
            </div>
        </div>
        <div data-aos="fade-left"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mt-10 border-none rounded w-4/5 mx-auto p-3 shadow shadow-blue-700">
            <h3 className="text-gray-400 font-bold"><LanguageIcon className="w-5 h-5 inline text-violet-500"/> Langages</h3>
            <div className="mt-3  p-5">
                    <ul className="font-xs text-gray-300">
                            <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> Malagasy</li>
                            <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> French</li>
                            <li className="text-left"><StarIcon className="w-3 h-3 text-violet-400 inline"/> English</li>          
                    </ul>
            </div>
        </div>
        <div data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine" className="mt-10 border-none rounded w-4/5 mx-auto p-3 shadow shadow-blue-700">
            <h3 className="text-gray-400 font-bold"><MapIcon className="w-5 h-5 inline text-violet-500"/> Localisation</h3>
            <div className="mt-3  p-5">
                    <p className="font-xs text-gray-300">
                            Antananarivo 101, Madagascar          
                    </p>
            </div>
        </div>
        <Link to='/'><ArrowLeftIcon className="text-blue-400 w-5 h-5 absolute top-20 mx-5"/></Link>
    </>
  )
}

export default About
