import React from 'react'
import {BsArrowRightCircle, BsGithub} from 'react-icons/bs'
 
const Portfolio = () => {
  return (
    <div id='portfolio'>
        <div className='flex-col' >
            <p className='text-red-900 text-2xl'>PORTFOLIO</p>
            <h3 className='font-medium text-4xl my-5'>Recent Works</h3>
        </div>
        <div className='grid grid-cols-flow-dense gap-10'>
          <div className="flex items-end justify-center w-sm aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-center bg-cover">
            <div className='text-white mb-5'>
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
          <div className="flex items-end justify-center w-sm aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1529651737248-dad5e287768e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80')] bg-center bg-cover">
            <div className='text-white mb-5'>
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
          <div className="flex items-end justify-center w-sm aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')] bg-center bg-cover">
            <div className='text-white mb-5'>
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
          <div className="flex items-end justify-center w-sm aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1600783245777-080fd7ff9253?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80')] bg-center bg-cover">
            <div className='text-white mb-5'>
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
           
   </div>
        <div className='flex w-sm bg-slate-900 p-5 text-white items-center justify-between cursor-pointer'>
            <p>view all works</p>
            <BsArrowRightCircle className='text-2xl'/>
        </div>
    </div>
  )
}

export default Portfolio