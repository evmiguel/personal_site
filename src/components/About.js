import React from 'react'
import './css/About.css'

const About = (props) => {
	return(
	    <div className='container'>
	    	<div className='about__text'>
	    		<h2>Hi! I'm Erika.</h2>
	    		<p className='about__description'>
				Erika is a first generation, GNC, tech professional who goes by she or they pronouns.
				She thrives in small teams and diverse, open-minded environments. Erika is currently
				an engineer at Bocoup and Smith College graduate in Computer Science. They have a breadth
				of technical experience ranging from Front End and npm package development in Javascript,
				cloud development in AWS and GCP, and CI/CD/Release management specifically with hardware
				products.
				</p>
				<p className='about__description'>
				Erika believes in uplifting the voices of marginalized groups in tech, particularly women,
				trans / GNC folks, and people of color. She believes in accessibility, work life balance,
				and listening to one's needs. She lives in Quincy, Massachusetts with her lovely wife (and
				best friend), Megan. They love to garden, cook, exercise, travel, and learn new things.
				Erika is currently exploring machine learning and data visualization off-hours.
	    		</p>
	    	</div>
	    </div>
	 )
}

export default About
