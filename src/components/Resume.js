import React from 'react'
import './css/Resume.css'

const Resume = (props) => {
	return(
		<div className='resume-container'>
			<div className='skills entry'>
				Skills
			</div>
			<div className='resume-content'>
				<div className='experience entry'>
					Experience
				</div>
				<div className='projects entry'>
					Projects
				</div>
				<div className='education entry'>
					Education
				</div>
			</div>
		</div>
	)
}

export default Resume