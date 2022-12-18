import React from 'react'
import {SiAltiumdesigner,SiAzuredevops} from 'react-icons/si'
import {MdDeveloperBoard} from 'react-icons/md'
import {GiSpinningBlades,GiArtificialIntelligence} from 'react-icons/gi'
 

const Services = () => {
  return (
    <div id='services' className='my-20' >
        <div className='flex-col' >
            <p className='text-red-900 text-2xl'>MY SERVICES</p>
            <h3 className='font-medium text-4xl my-5'>What I Do</h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 md:flex-row">
            <div className="border-2 px-4 py-2 shadow-md max-w-sm sm:w-2/5 hover:shadow-xl hover:scale-105">
                <div  >
                    <SiAltiumdesigner className='text-4xl my-10 font-bold text-red-900 '/>
                </div>
                <h5 className='font-medium text-xl leading-10'>Web Design</h5>
                <p className='leading-7 font-light'>Using Figma, I engineer Intuitive User Interfaces; Accessibility blended with State of the art design principles to provide a seemless User Experience</p>
            </div>
            <div className="border-2 px-4 py-2 shadow-md max-w-sm sm:w-2/5 hover:shadow-xl hover:scale-105">
                <div >
                    <MdDeveloperBoard className='text-4xl my-10 font-bold text-red-900 '/>
                </div>
                <h5 className='font-medium text-xl leading-10'>Web Development</h5>
                <p className='leading-7 font-light'>Let us Make your web applications come alive!!! Fully responsive across all screens and devices with the smallest detail taken into consideration to satisfy your customers.</p>
            </div>
            <div className="border-2 px-4 py-2 shadow-md max-w-sm sm:w-2/5 hover:shadow-xl hover:scale-105">
                <div  >
                    <SiAzuredevops className='text-4xl my-10 font-bold text-red-900' />
                     
                </div>
                <h5 className='font-medium text-xl leading-10'>Devops</h5>
                <p className='leading-7 font-light'>Deploy your code to production asap!!! Easily scalable and flexible infrastructure as code to implement your backend and frontend services on the go, Bringing your your application closer to the right audience and giving you the necessary exposure.</p>
            </div>
            <div className="border-2 px-4 py-2 shadow-md max-w-sm sm:w-2/5 hover:shadow-xl hover:scale-105">
                <div  >
                <GiSpinningBlades className='text-4xl my-10 font-bold text-red-900' />
                    
                </div>
                <h5 className='font-medium text-xl leading-10'>Devops consultation</h5>
                <p className='leading-7 font-light'>Get Access to Current insight in technologies and tools to make your deployment easier to maintain and faster to meet market demands on time.</p>
            </div>
            <div className="border-2 px-4 py-2 shadow-md max-w-sm sm:w-2/5 hover:shadow-xl hover:scale-105">
                <div >
                <GiArtificialIntelligence className='text-4xl my-10 font-bold text-red-900' />
               
                </div>
                <h5 className='font-medium text-xl'>AI/ML</h5>
                <p className='leading-7 font-light'>Clean and Efficient Models engineered to solve your problems, enhance revenue and cut expenses relevant to your business.</p>
            </div>
          
        </div>
    </div>
  )
}

export default Services