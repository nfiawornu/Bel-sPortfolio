import React from 'react'
import { TbCertificate } from 'react-icons/tb'
 

const Certificates = () => {
  return (
    <div id='certificates' className='mx-auto'>
    <div className='flex-col' >
        <p className='text-red-900 text-2xl'>CERTIFICATIONS</p>
        <h3 className='font-medium text-4xl my-5'>My Certificates</h3>
    </div>
    <div className='flex flex-wrap flex-col gap-5 sm:flex-row '>
          <div className="flex items-end justify-center shadow-md md:max-w-md aspect-[4/3] bg-[url('/public/assets/images/udacity.png')] bg-center bg-cover">
            <a href='https://graduation.udacity.com/confirm/GHSZ4CPV' className='text-white mb-5'>
              <span className='flex px-4 py-2 opacity-50 bg-slate-900 rounded-lg mb-2 border-2'>
                <TbCertificate className='text-2xl text-white mr-5'/>
                <p className='font-medium text-sm'>View Certificate</p>
              </span>             
            </a>
         </div>
         <div className="flex items-end justify-center shadow-md  md:max-w-md aspect-[4/3] bg-cover bg-[url('/public/assets/images/aws.jpg')] bg-center ">
            <a href='https://www.credly.com/badges/b40a1452-aef4-4fc8-9cde-ef2560755918?source=linked_in_profile' className='text-white mb-5'>
              <span className='flex px-4 py-2 opacity-50 rounded-lg mb-2 border-2'>
                <TbCertificate className='text-2xl mr-5'/>
                <p className='font-medium text-sm'>View Certificate</p>
              </span>             
            </a>
         </div>
         <div className="flex items-end justify-center shadow-md  md:max-w-md aspect-[4/3] bg-repeat-y bg-[length:200px] bg-[url('/public/assets/images/coursera-logo-full-rgb.png')] bg-center">
            <a href='https://www.coursera.org/account/accomplishments/certificate/6DM2FSXFQUD3' className='text-white mb-5'>
              <span className='flex px-4 py-2 opacity-50 rounded-lg text-white bg-slate-900 mb-2 border-2 '>
                <TbCertificate className='text-2xl mr-5'/>
                <p className='font-medium text-sm'>View Certificate</p>
              </span>             
            </a>
         </div>
         <div className="flex items-end justify-center shadow-md  md:max-w-md aspect-[4/3] bg-repeat-y bg-[length:200px] bg-[url('/public/assets/images/HackerRank.png')] bg-center">
            <a href='https://www.hackerrank.com/certificates/5045ace0fb7f' className='text-white mb-5'>
              <span className='flex px-4 py-2 opacity-50 rounded-lg mb-2 text-white bg-slate-900 border-2'>
                <TbCertificate className='text-2xl mr-5'/>
                <p className='font-medium text-sm'>View Certificate</p>
              </span>             
            </a>
         </div>
         <div className="flex items-end justify-center shadow-md md:max-w-md aspect-[4/3] bg-repeat-y bg-[length:200px] bg-[url('/public/assets/images/coursera-logo-full-rgb.png')] bg-center ">           
                <a href="https://www.coursera.org/account/accomplishments/certificate/RG89TQ452RRJ" className='text-white mb-5'>
                    <span className='flex px-4 py-2  opacity-50 rounded-lg mb-2 text-white bg-slate-900 border-2'>
                        <TbCertificate className='text-2xl mr-5'/>
                        <p className='font-medium text-sm'>View Certificate</p>                    
                    </span>             
                </a>            
         </div>
      
          </div>
        </div>   
  )
}

export default Certificates