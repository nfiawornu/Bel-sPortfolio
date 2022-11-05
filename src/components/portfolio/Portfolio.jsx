import React from 'react'
import {BsArrowRightCircle, BsGithub} from 'react-icons/bs'
import portfolioItems from './portfolioData'
 
const Portfolio = () => {
   


  return (
    <div id='portfolio'>
        <div className='flex-col' >
            <p className='text-red-900 text-2xl'>PORTFOLIO</p>
            <h3 className='font-medium text-4xl my-5'>Recent Works</h3>
        </div>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-10 md:flex-row md:flex-wrap'>
        {
              portfolioItems.map((portfolioItem,index) => {
              return (
              <div key={index} style={{backgroundImage:`url(${portfolioItem.portfolioImageUrl})`}} className="flex items-end justify-center shadow-md max-w-sm sm:w-2/5 md:2/5 aspect-[4/3] bg-center bg-cover">
              <div className='text-white mb-5 px-10'>
                <span className='flex px-4 py-2 opacity-80 rounded-lg mb-2 bg-slate-900'>
                <BsGithub className='text-2xl mr-5'/>
                <a href={portfolioItem.gitHubUrl}>

                <p className='font-medium text-sm'>View Source Code</p>
                </a>
              </span>
              <span className='flex px-4 py-2 opacity-80 rounded-lg bg-slate-900'>
                <BsGithub className='text-2xl mr-5'/>
                <a href={portfolioItem.liveSiteUrl}>
                <p className='font-medium text-sm' >View Live Site</p>
                </a>
              </span>
              </div>
              </div>
            )})
        }     
             
   </div>
        <div className='flex my-5 max-w-sm bg-slate-900 p-5 text-white items-center justify-between cursor-pointer'>
            <p>view all works</p>
            <BsArrowRightCircle className='text-2xl'/>
        </div>
    </div>
  )
}

export default Portfolio