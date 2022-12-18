import React,{useState} from 'react'
 import {HiMenuAlt3} from 'react-icons/hi'
 import {AiOutlineCloseCircle} from 'react-icons/ai'
 import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
 import {BiMailSend} from 'react-icons/bi';
 
const Hero = () => {
    const [dropMenu,setDropMenu]=useState(true);
  return (
    <div id='about'>
        <nav className='flex items-base justify-between my-10'>
            <ul >
                <li className='font-extrabold text-sm'>BEL</li>
            </ul>
            <ul>
                <li className={ dropMenu && 'sm:hidden'}>
                <HiMenuAlt3 onClick={()=>setDropMenu(prev=>!prev)} className={dropMenu?'text-2xl':'hidden'}/>
                </li>
            </ul>
            <ul className={dropMenu ? 'hidden sm:flex sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 justify-between items-center':'flex flex-col'}>
                <AiOutlineCloseCircle onClick={()=>setDropMenu(prev=>!prev)} className={dropMenu ? 'hidden':'text-2xl ml-auto mb-5'}/>
                <li className='transition ease-in-out delay-100 hover:-translate-y-1 duration:300 hover:text-red-900 hover:scale-110 hover:font-bold'>
                    <a href="#portfolio">
                        Porfolio
                    </a>
                </li>
                <li className='transition ease-in-out delay-100 hover:-translate-y-1 duration:300 hover:text-red-900 hover:scale-110 hover:font-bold'>
                    <a href="#about" className='border-b-5 border-black-900'>
                        About
                    </a>
                </li>
                <li className='transition ease-in-out delay-100 hover:-translate-y-1 duration:300 hover:text-red-900 hover:scale-110 hover:font-bold'>
                    <a href="#services">
                        Services
                    </a>
                </li>
                <li className='transition ease-in-out delay-100 hover:-translate-y-1 duration:300 hover:text-red-900 hover:scale-110 hover:font-bold' >
                    <a href="#certificates">
                        Certificates
                    </a>
                </li>
                <li className='transition ease-in-out delay-100 hover:-translate-y-1 duration:300 hover:text-red-900 hover:scale-110 hover:font-bold' >
                    <a href="#contact">
                        Contact Me
                    </a>
                </li>
                <li className='bg-red-900 py-2 px-4 rounded-xl text-white hover:text-red-900 hover:bg-white hover:border-red-900 hover:border-2 hover:font-bold' >
                    <a href="https://drive.google.com/file/d/1kbP982Jo80laVJcr9I82IVER6AxYtgdc/view?usp=sharing">
                        Download CV
                    </a>
                </li>
            </ul>
        </nav>
        <div className='border-b-10 border-black flex flex-col sm:flex-row sm:justify-between sm:items-start'>
            <div className='sm:w-1/2'>
                <p className='text-2xl font-bold'>Welcome! <b className='text-red-900'>I am</b></p>
                <h3 className='text-4xl font-extrabold text-gray-800'> Fiawornu Nobel</h3>
                <h5 className='text-lg font-medium text-gray-900'> SWE | Devops Engineer | ML enthusiast</h5>
                <p className='leading-8 font-light w-1/2 my-5 pr-5 text-lg sm:w-full'>
                    Devops engineer with a tonne of experience with Devops tools and technologies for building efficient, automated and robust continuous deployment pipelines with an eye for detail to discover pipeline bottlenecks in order to engineer a faster software development lifecycle. </p>
                <div >
                    <div>
                        <h4 className='font-medium text-red-800'>FIND ME ON</h4>
                        <div className='flex mb-5 flex-wrap gap-2'>
                            <a href="https://github.com/belisky/">
                                <div className='bg-slate-900 aspect-[1] w-16 h-16 rounded-md mr-5 flex items-center justify-center '>
                                <BsGithub className='shadow-md text-white text-4xl '/>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/noble-fiawornu/">
                                <div className="bg-slate-900 h-16 w-16 rounded-md mr-5 flex items-center justify-center">
                                <BsLinkedin className='text-4xl shadow-md text-white'/>
                                </div>
                            </a>
                            <a href="mailto:fiawornunobel@gmail.com">
                                <div className="bg-slate-900 h-16 w-16 rounded-md mr-5 flex items-center justify-center">
                                <BiMailSend className='text-4xl shadow-md text-white'/>
                                </div>    
                            </a>
                            <a href="https://wa.me/233551368268?text=Hi Nobel!,%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20schedule%20a%20coffee%20chat%20to%20discuss%20your%20career%20goals">
                            <div className="bg-slate-900 h-16 w-16 rounded-md mr-5 flex items-center justify-center">
                            <BsWhatsapp className='text-4xl shadow-md text-white'/>
                            </div>  
                            </a>                            
                        </div>
                    </div>
                    <div className="flex items-center my-5">
                        <div className="bg-slate-900 text-white py-2 px-4 mr-5">
                            <h5 className='font-black text-3xl'>2+</h5>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="bg-slate-900 text-white py-2 px-4">
                            <h5 className='font-black text-3xl'>5+</h5>
                            <p>PROFESSIONAL CERTIFICATES</p>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="flex sm:w-1/2 sm:aspect-[16/30] md:aspect-[16/12]">            
               <img className='object-cover object-center w-full' src="https://drive.google.com/uc?export=view&id=1EQHXCs88QbIoCGXe_PblhQN_ssN7Cdey" alt="my_self" />
            </div>            
        </div>
    </div>
  )
}

export default Hero