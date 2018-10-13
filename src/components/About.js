import React from 'react'
import './css/About.css'

const About = (props) => {
	return(
	    <div className='container'>
	    	<div className='about__text'>
	    		<h2>Hi! I'm Erika.</h2>
	    		<p className='about__description'>
	    			I am a Boston/Cambridge/Somerville area based software developer with 3 years of career experience in tech.
	    			I have worked various roles in DevOps, from infrastructure maintenace to automation software engineering.
	    			Now, I am making a career shift into Front End development. Currently, I am enrolled in the Front End Nanodegree
	    			and React Nanodegree programs at Udacity. I am interested in Front End roles and software engineer positions that
	    			can leverage my Front End and Python programming experience.
	    		</p>
	    		<p className='about__description'>
	    			I am part of the LGBTQIA+ community and am part of POC spaces. Together with my fianceé, Megan, we also host an &nbsp;
	    			<a href='https://www.airbnb.com/rooms/27405784' target='_blank'>Airbnb</a> in Somerville and are also planning our wedding! My other hobbies include biking, reading short-stories,
	    			and cooking. Lovely to meet you!
	    		</p>
	    	</div>
	    </div>
	 )
}

export default About