import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook} from '@fortawesome/free-brands-svg-icons'
import './Hero.styles.css'

const Hero = () => {
  return (
    <div className='hero col'>
        <nav className='hero-Nav'>
            <ul className='nav-Left'>
                <li>Logo</li>
            </ul>
            <ul className='nav-Right row'>
                <li>
                    <a href="portfolio">
                        Porfolio
                    </a>
                </li>
                <li>
                    <a href="about">
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
                    <a href="cv">
                        Download CV
                    </a>
                </li>
            </ul>
        </nav>
        <div className='hero-Main row'>
            <div className='hero-Left col'>
                <p className='welcome'>Welcome! I am</p>
                <h3 className='name'> Fiawornu Nobel</h3>
                <h5>Web Developer | Devops Engineer | ML enthusiast</h5>
                <p className='pitch'>Elevator pitch Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor tenetur delectus ratione. Enim, at sapiente fugit laborum 
                    pariatur inventore minima eum fuga adipisci omnis accusantium.</p>
                <div className='socials'>
                    <div className="media-Handles col">
                        <h4>FIND ME ON</h4>
                        <div className="media-Logos row">
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </div>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </div>
                            <div className="social">
                                <FontAwesomeIcon icon={faFacebook}/>
                            </div>
                            
                        </div>
                    </div>
                    <div className="experience">
                        <div className="experience-Section">
                            <h5>2+</h5>
                            <p>YEARS OF EXPERIENCE</p>
                        </div>
                        <div className="experience-Section">
                            <h5>5+</h5>
                            <p>AUTHENTIC CERTIFICATES</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='hero-Right'>
                 <img className='hero-Img' src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTAwfHxhcHAlMjBiYWNrZ3JvdW5kc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" alt="placeholder" />
            </div>            
        </div>
    </div>
  )
}

export default Hero