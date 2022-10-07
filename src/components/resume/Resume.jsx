import React from 'react'

const Resume = () => {
  return (
    <div>
        <div className='resume-Header'>
            <p>YEARS OF EXPERIENCE</p>
            <h3>My Resume</h3>            
        </div>
        <div className="resume">
            <div className="resume-Left">
                <div className="experiences-Header">
                    <h4>Job Experience</h4>
                    <p>2020-2022</p>
                </div>
                <div className="experiences">
                    <div className="experience-Card">
                        <h5 className="experience-Header">Bachelor of Engineering, computer Engineering</h5>
                        <p className='experience-Sub'>Kwame Nkrumah University (2018-2022) </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Resume