import React from 'react'
import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi';

const Footer = () => {
  return (
    <div id='contact'>        
        <p className='text-red-900 text-2xl'>LET'S GET PERSONAL</p>
        <div className='flex mb-5 items-center justify-center h-20'>
        <a href="https://github.com/belisky/">
            <div className='bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center hover:scale-125 hover:-translate-y-2'>
            <BsGithub className='text-2xl shadow-md text-white'/>
            </div>
        </a>
        <a href="https://www.linkedin.com/in/noble-fiawornu/">
            <div className="bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center hover:scale-125 hover:-translate-y-2">
            <BsLinkedin className='text-2xl shadow-md text-white'/>
            </div>
        </a>
        <a href="https://wa.me/233551368268?text=Hi Nobel!,%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20schedule%20a%20coffee%20chat%20to%20discuss%20your%20career%20goals">
            <div className="bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center hover:scale-125 hover:-translate-y-2">
            <BsWhatsapp className='text-2xl shadow-md text-white'/>
            </div>  
        </a>
        <a href="mailto:fiawornunobel@gmail.com">
            <div className="bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center hover:scale-125 hover:-translate-y-2">
            <BiMailSend className='text-2xl shadow-md text-white'/>
            </div>    
        </a>
            
        </div>
        <p className='text-center my-10'>&#169;2022 | All rights reserved</p>
       

    </div>
  )
}

export default Footer