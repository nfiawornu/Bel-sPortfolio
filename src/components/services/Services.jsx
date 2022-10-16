import React from 'react'
import {SiAltiumdesigner,SiAzuredevops} from 'react-icons/si'
import {MdDeveloperBoard} from 'react-icons/md'
import {GiSpinningBlades,GiArtificialIntelligence} from 'react-icons/gi'
 

const Services = () => {
  return (
    <div id='services' className='my-10' >
        <div className='flex-col' >
            <p className='text-red-900 text-2xl'>MY SERVICES</p>
            <h3 className='font-medium text-4xl my-5'>What I Do</h3>
        </div>
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-10 md:flex-row">
            <div className="border-2 px-4 py-2">
                <div  >
                    <SiAltiumdesigner className='text-4xl my-10 font-bold text-red-900 '/>
                </div>
                <h5 className='font-medium text-xl my-3'>Web Design</h5>
                <p className='service-Body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, esse iste nisi tenetur sequi?</p>
            </div>
            <div className="border-2 px-4 py-2">
                <div >
                    <MdDeveloperBoard className='text-4xl my-10 font-bold text-red-900 '/>
                </div>
                <h5 className='font-medium text-xl'>Web Development</h5>
                <p className='service-Body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, esse iste nisi tenetur sequi?</p>
            </div>
            <div className="border-2 px-4 py-2">
                <div  >
                    <SiAzuredevops className='text-4xl my-10 font-bold text-red-900' />
                     
                </div>
                <h5 className='font-medium text-xl'>Devops</h5>
                <p className='service-Body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, esse iste nisi tenetur sequi?</p>
            </div>
            <div className="border-2 px-4 py-2">
                <div  >
                <GiSpinningBlades className='text-4xl my-10 font-bold text-red-900' />
                    
                </div>
                <h5 className='font-medium text-xl'>Devops consultation</h5>
                <p className='service-Body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, esse iste nisi tenetur sequi?</p>
            </div>
            <div className="border-2 px-4 py-2">
                <div >
                <GiArtificialIntelligence className='text-4xl my-10 font-bold text-red-900' />
               
                </div>
                <h5 className='font-medium text-xl'>AI/ML</h5>
                <p className='service-Body'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae modi, esse iste nisi tenetur sequi?</p>
            </div>
          
        </div>
    </div>
  )
}

export default Services