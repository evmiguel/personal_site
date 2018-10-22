import React from 'react'
import erikareads from '../img/erikareads.png'
import memorygame from '../img/memorygame.png'
import wouldyourather from '../img/wouldyourather.png'
import Project from './Project'
import './css/Projects.css'

const Projects = (props) => {
	return (
		<div className='projects'>
			<h2 className='resume-header'>Projects</h2>
			<section className='projects-section'>
				<Project name='Bookshelf Project Submission'
						 img={erikareads}
						 alt='Bookshelf Project Submission for Udacity'
						 caption="Project submission for Udacity's React course. Deployed on AWS."
						 url='https://reactproj1.erikamiguel.com'
						 repo='https://github.com/evmiguel/reactnd-project-myreads-starter' />
				<Project name='Memory Game Submission'
						 img={memorygame}
						 alt='Memory game Submission for Udacity'
						 caption="Project submission for Udacity's front end course. Deployed on AWS."
						 url='https://memorygame.erikamiguel.com'
						 repo='https://github.com/evmiguel/fend-project-memory-game' />
				<Project name='Would You Rather Game Submission'
						 img={wouldyourather}
						 alt='Would You Rather Game Submission for Udacity'
						 caption="Second project submission for Udacity's React course. Deployed on AWS."
						 url='https://reactproj2.erikamiguel.com'
						 repo='https://github.com/evmiguel/would-you-rather' />
			</section>
		</div>

	)
}

export default Projects