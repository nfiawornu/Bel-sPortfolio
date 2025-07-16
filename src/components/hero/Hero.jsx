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
 
                    <a href="https://drive.google.com/file/d/1WweeBSEQuptvzbe6wVCaVaz4gKVZd6s8/view?usp=sharing">
                        Download CV
                    </a>
                </li>
            </ul>
        </nav>
        <div className='border-b-10 border-black flex flex-col sm:flex-row sm:justify-between sm:items-start'>
            <div className='sm:w-1/2'>
                <p className='text-2xl font-bold'>Welcome! <b className='text-red-900'>I am</b></p>
                <h3 className='cursor-pointer text-4xl font-extrabold text-gray-800 hover:scale-125 hover:translate-x-20'> Fiawornu Nobel</h3>
                <h5 className='text-lg font-medium text-gray-900'> SRE | Devops | SWE | ML </h5>
                <p className='leading-8 font-light w-1/2 my-5 pr-5 text-lg sm:w-full'>
                  I am a problem-solving-driven DevOps Engineer with deep hands-on experience in modern DevOps tools and cloud-native technologies.
                  I specialize in building automated, scalable, and resilient CI/CD pipelines that enable faster, safer, and more reliable deployments.
                   <br />
                  With a sharp eye for system performance bottlenecks, I engineer solutions that:<br />
                   ⚡ Accelerate release cycles <br />
                   📈 Enhance infrastructure scalability <br />
                   🔐 Uphold security and reliability best practices
                   <br />
                  Whether it's optimizing deployment workflows or ensuring rock-solid uptime, I bring a balance of speed, precision, and security to every environment I touch.
                </p>
                <div >
                    <div>
                        <h4 className='font-medium text-red-800'>FIND ME ON</h4>
                        <div className='flex mb-5 flex-wrap gap-2'>
                            <a href="https://github.com/nfiawornu/">
                                <div className='bg-slate-900 aspect-[1] w-16 h-16 rounded-md mr-5 flex items-center justify-center hover:bg-red-900 hover:shadow-md'>
                                <BsGithub className='shadow-md text-white text-4xl '/>
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/noble-fiawornu/">
                                <div className="bg-slate-900 h-16 w-16 rounded-md mr-5 flex items-center justify-center hover:bg-red-900 hover:shadow-md">
                                <BsLinkedin className='text-4xl shadow-md text-white'/>
                                </div>
                            </a>
                            <a href="mailto:fiawornunobel@gmail.com">
                                <div className="bg-slate-900 h-16 w-16 rounded-md mr-5 flex items-center justify-center hover:bg-red-900 hover:shadow-md">
                                <BiMailSend className='text-4xl shadow-md text-white'/>
                                </div>    
                            </a>
                            <a href="https://wa.me/233551368268?text=Hi Nobel!,%20I%20saw%20your%20portfolio%20and%20I%20would%20like%20to%20schedule%20a%20coffee%20chat%20to%20discuss%20your%20career%20goals">
                            <div className="bg-slate-900 h-16 w-16 rounded-md mr-5 flex items-center justify-center hover:bg-red-900 hover:shadow-md">
                            <BsWhatsapp className='text-4xl shadow-md text-white'/>
                            </div>  
                            </a>                            
                        </div>
                    </div>
                    <div className="flex items-center my-5">
                        <div className="bg-slate-900 text-white py-2 px-4 mr-5 hover:bg-red-900 hover:shadow-md">
                            <h5 className='font-black text-3xl'>4+</h5>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="bg-slate-900 text-white py-2 px-4 hover:bg-red-900 hover:shadow-md">
                            <h5 className='font-black text-3xl'>5+</h5>
                            <p>PROFESSIONAL CERTIFICATES</p>
                        </div>
                    </div>
                    </div>
            </div>
            <div className="flex sm:w-1/2 sm:aspect-[16/30] md:aspect-[16/12]">    
              
               <img className='object-cover object-center w-full' src="https://drive.google.com/uc?export=view&id=1Jw-94c11_exttE3PKvhjjWKkJ_klUXCM" alt="my_self" />
            </div>            
        </div>
    </div>
  )
}

export default Hero
