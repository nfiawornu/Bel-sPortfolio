import React from 'react'
import {BsArrowRightCircle, BsGithub} from 'react-icons/bs'
 
const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className='flex-col' >
            <p className='text-red-900 text-2xl'>PORTFOLIO</p>
            <h3 className='font-medium text-4xl my-5'>Recent Works</h3>
        </div>
        <div className='flex flex-col sm:flex-row sm:flex-wrap gap-10 md:flex-row md:flex-wrap'>
          <div className="flex items-end justify-center max-w-sm sm:w-2/5 md:2/5 aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-center bg-cover">
            <div className='text-white mb-5 px-10'>
              <span className='flex px-4 py-2 opacity-80 rounded-lg mb-2 bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <a href="https://github.com/belisky/bel-clothing">

              <p className='font-medium text-sm'>View Source Code</p>
              </a>
            </span>
            <span className='flex px-4 py-2 opacity-80 rounded-lg bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <a href="https://b-clothing-live.herokuapp.com/">
              <p className='font-medium text-sm' >View Live Site</p>
              </a>
            </span>
            </div>
          </div>
          <div className="flex items-end justify-center max-w-sm sm:w-2/5 md:2/5 aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1529651737248-dad5e287768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80')] bg-center bg-cover">
            <div className='text-white mb-5 px-10'>
              <span className='flex px-4 py-2 opacity-80 rounded-lg mb-2 bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <a href="https://github.com/belisky/ReminderApp">

              <p className='font-medium text-sm'>View Source Code</p>
              </a>
            </span>
            <span className='flex px-4 py-2 opacity-80 rounded-lg bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <a href="https://bel-reminder.netlify.app/">
              <p className='font-medium text-sm' >View Live Site</p>
              </a>
            </span>
            </div>
          </div>
          <div className="flex items-end justify-center max-w-sm sm:w-2/5 md:2/5 flex-96 bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-center bg-cover">
            <div className='text-white mb-5 px-10'>
              <span className='flex px-4 py-2 opacity-80 rounded-lg mb-2 bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <p className='font-medium text-sm'>View Source Code</p>
            </span>
            <span className='flex px-4 py-2 opacity-80 rounded-lg bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <p className='font-medium text-sm' >View Live Site</p>
            </span>
            </div>
          </div>
          <div className="flex items-end justify-center max-w-sm sm:w-2/5 md:2/5 aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')] bg-center bg-cover">
            <div className='text-white mb-5 px-5'>
              <span className='flex px-4 py-2 opacity-80 rounded-lg mb-2 bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <a href="https://github.com/belisky/GoogleDriveClone">

              <p className='font-medium text-sm'>View Source Code</p>
              </a>
            </span>
            <span className='flex px-4 py-2 opacity-80 rounded-lg bg-slate-900'>
              <BsGithub className='text-2xl mr-5'/>
              <a href="https://bel-drive-clone.herokuapp.com/">
              <p className='font-medium text-sm' > View Live Site</p>
              </a>
            </span>
            </div>
          </div>           
   </div>
        <div className='flex my-5 max-w-sm bg-slate-900 p-5 text-white items-center justify-between cursor-pointer'>
            <p>view all works</p>
            <BsArrowRightCircle className='text-2xl'/>
        </div>
    </div>
  )
}

export default Portfolio