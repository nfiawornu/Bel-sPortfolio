import React from 'react'

const Skills = () => {
  return (
    <div id='skills' className='my-20' > 
        <div className='flex-col' >
            <p className='text-red-900 text-2xl'>SKILLS AND TECHNOLOGIES</p>
            <h3 className='font-medium text-4xl my-5'>MY SKILLS</h3>
        </div>
        <div className='flex flex-col w-full md:flex-row md:justify-between sm:items-start'>
          <div className='flex flex-col w-full md:w-1/2'>
            <h5 className='font-medium text-2xl text-slate-900 my-5'>Web Development</h5>                 
                <div class="m-1 h-5 bg-gradient-to-r text-white w-11/12 rounded-md font-bold text-center from-cyan-500 to-blue-500">React 80%</div>
                <div class="m-1 h-5 bg-gradient-to-r text-white w-4/5 rounded-md font-bold text-center from-sky-500 to-indigo-500">Javascript 80%</div>
                <div class="m-1 h-5 bg-gradient-to-r text-white w-11/12 rounded-md font-bold text-center from-violet-500 to-fuchsia-500">HTML 90%</div>
                <div class="m-1 h-5 bg-gradient-to-r text-white w-11/12 rounded-md font-bold text-center from-purple-500 to-pink-500">CSS 90%</div>           
            
          </div>
          <div className='flex flex-col w-full md:w-1/2'>
          <h5 className='font-medium text-2xl text-slate-900 my-5'>Devops</h5>
          <div class="m-1 h-5 bg-gradient-to-r text-white w-8/12 rounded-md font-bold text-center from-cyan-500 to-blue-500">AWS 80%</div>
            <div class="m-1 h-5 bg-gradient-to-r text-white w-4/5 rounded-md font-bold text-center from-sky-500 to-indigo-500">CIRCLE-CI 80%</div>
            <div class="m-1 h-5 bg-gradient-to-r text-white w-8/12 rounded-md font-bold text-center from-violet-500 to-fuchsia-500">DOCKER 70%</div>
            <div class="m-1 h-5 bg-gradient-to-r text-white w-7/12 rounded-md font-bold text-center from-purple-500 to-pink-500">KUBERNETES 60%</div> 
            <div class="m-1 h-5 bg-gradient-to-r text-white w-11/12 rounded-md font-bold text-center from-violet-500 to-fuchsia-500">PYTHON 90%</div>
            <div class="m-1 h-5 bg-gradient-to-r text-white w-6/12 rounded-md font-bold text-center from-purple-500 to-pink-500">BASH 60%</div> 
            <div class="m-1 h-5 bg-gradient-to-r text-white w-7/12 rounded-md font-bold text-center from-violet-500 to-fuchsia-500">CLOUD FORMATION 60%</div>
          
         </div>     
        </div>
         
    </div>
  )
}

export default Skills