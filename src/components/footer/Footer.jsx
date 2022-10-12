import React from 'react'
import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import {BiMailSend} from 'react-icons/bi';

const Footer = () => {
  return (
    <div>
        
        <p className='text-red-900 text-2xl'>LET'S GET PERSONAL</p>
        <div className='flex mb-5 items-center justify-center h-20'>
            <div className='bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center'>
            <BsGithub className='text-2xl shadow-md text-white'/>
            </div>
            <div className="bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center">
            <BsLinkedin className='text-2xl shadow-md text-white'/>
            </div>
            <div className="bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center">
            <BsWhatsapp className='text-2xl shadow-md text-white'/>
            </div>  
            <div className="bg-slate-900 h-15 w-15 rounded-full mr-5 flex items-center justify-center">
            <BiMailSend className='text-2xl shadow-md text-white'/>
            </div>    
            
        </div>
        <p className='text-center my-5'>&#169;2022 | All rights reserved</p>
       

    </div>
  )
}

export default Footer