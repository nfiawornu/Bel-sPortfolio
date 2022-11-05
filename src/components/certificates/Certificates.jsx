import React from 'react'
import { TbCertificate } from 'react-icons/tb'
import certificatesDataItems from './certificatesData'
 

const Certificates = () => {
  return (
    <div id='certificates' className='mx-auto my-20'>
    <div className='flex-col' >
        <p className='text-red-900 text-2xl'>CERTIFICATIONS</p>
        <h3 className='font-medium text-4xl my-5'>My Certificates</h3>
    </div>
    <div className='flex flex-wrap flex-col gap-5 sm:flex-row '>
         {
         certificatesDataItems.map((certificate,index)=>
         {
          return (
            <div key={index} style={{backgroundImage:`url(${certificate.certificateBackground})`}} className="flex items-end justify-center shadow-md max-w-sm sm:w-2/5 md:2/5 aspect-[4/3] bg-no-repeat bg-[length:200px] bg-center">
            <a href={certificate.certificateUrl} className='text-white mb-5'>
              <span className='flex px-4 py-2 opacity-50 bg-slate-900 rounded-lg mb-2 border-2'>
                <TbCertificate className='text-2xl text-white mr-5'/>
                <p className='font-medium text-sm'>View Certificate</p>
              </span>             
            </a>
         </div>
          )}) 
         }    
      
          </div>
        </div>   
  )
}

export default Certificates