import React from 'react'
import erikareads from '../img/erikareads.png'
import memorygame from '../img/memorygame.png'
import './css/Projects.css'

const Projects = (props) => {
	return (
		<div className='projects'>
			<h2 className='resume-header'>Projects</h2>
			<section className='projects-section'>
				<div>
					<h3>BOOKSHELF PROJECT SUBMISSION</h3>
					<figure>
					  <a href="https://reactproj1.erikamiguel.com" target="_blank">
					  	<img src={erikareads}
					    		alt="Bookshelf Project Submission for Udacity" />
					  </a>
					  <figcaption>Project submission for Udacity's React course. Deployed on AWS.
					  	<a href='https://github.com/evmiguel/reactnd-project-myreads-starter' target='_blank'> Source code</a>
					  </figcaption>
					</figure>
				</div>
				<div>
					<h3>MEMORY GAME PROJECT SUBMISSION</h3>
					<figure>
					  <a href="https://memorygame.erikamiguel.com" target="_blank">
					  	<img src={memorygame}
					    		alt="Memory game Submission for Udacity" />
					  </a>
					  <figcaption>Project submission for Udacity's front end course. Deployed on AWS.
					  	<a href='https://github.com/evmiguel/fend-project-memory-game' target='_blank'> Source code</a>
					  </figcaption>
					</figure>
				</div>
			</section>
		</div>

	)
}

export default Projects