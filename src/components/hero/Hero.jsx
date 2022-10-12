import React,{useState} from 'react'
 import {HiMenuAlt3} from 'react-icons/hi'
 import {AiOutlineCloseCircle} from 'react-icons/ai'
 import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
 import {BiMailSend} from 'react-icons/bi';
const Hero = () => {
    const [dropMenu,setDropMenu]=useState(true);
  return (
    <div  >
        <nav className='flex items-base justify-between my-10'>
            <ul >
                <li>Logo</li>
            </ul>
            <ul>
                <li className={ !dropMenu && 'hidden'}>
                <HiMenuAlt3 onClick={()=>setDropMenu(prev=>!prev)} className='text-2xl'/>
                </li>
            </ul>
            <ul className={dropMenu && ' border hidden justify-evenly'}>
                <AiOutlineCloseCircle onClick={()=>setDropMenu(prev=>!prev)} className='text-2xl ml-auto mb-5'/>
                <li className='tw-border-solid border-black-900'>
                    <a href="#portfolio">
                        Porfolio
                    </a>
                </li>
                <li className='border-b-5 border-black'>
                    <a href="about" className='border-b-5 border-black-900'>
                        About
                    </a>
                </li>
                <li>
                    <a href="projects">
                        Projects
                    </a>
                </li>
                <li>
                    <a href="contact">
                        Contact Me
                    </a>
                </li>
                <li>
                    <a href="#cv">
                        Download CV
                    </a>
                </li>
            </ul>
        </nav>
        <div className='border-b-10 border-black'>
            <div className='hero-Left col'>
                <p className='text-3xl font-extrabold'>Welcome! <b className='text-red-900'>I am</b></p>
                <h3 className='text-2xl font-bold text-gray-800'> Fiawornu Nobel</h3>
                <h5 className='text-lg font-medium text-gray-900'>Web Developer | Devops Engineer | ML enthusiast</h5>
                <p className='leading-8 font-light my-5 text-lg'>Elevator pitch Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tenetur delectus ratione. Enim, at sapiente fugit laborum 
                    pariatur inventore minima eum fuga adipisci omnis accusantium.</p>
                <div >
                    <div>
                        <h4 className='font-medium text-red-800'>FIND ME ON</h4>
                        <div className='flex mb-5'>
                            <div className='bg-slate-900 h-20 w-20 rounded-md mr-5 flex items-center justify-center'>
                            <BsGithub className='text-4xl shadow-md text-white'/>
                            </div>
                            <div className="bg-slate-900 h-20 w-20 rounded-md mr-5 flex items-center justify-center">
                            <BsLinkedin className='text-4xl shadow-md text-white'/>
                            </div>
                            <div className="bg-slate-900 h-20 w-20 rounded-md mr-5 flex items-center justify-center">
                            <BsWhatsapp className='text-4xl shadow-md text-white'/>
                            </div>  
                            <div className="bg-slate-900 h-20 w-20 rounded-md mr-5 flex items-center justify-center">
                            <BiMailSend className='text-4xl shadow-md text-white'/>
                            </div>    
                            
                        </div>
                    </div>
                    <div className="flex items-center justify-between my-5">
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
            <div className="w-sm aspect-[4/3] bg-[url('https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxhcHAlMjBiYWNrZ3JvdW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60')] bg-center bg-contain">            
             
            </div>            
        </div>
    </div>
  )
}

export default Hero