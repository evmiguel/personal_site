import React from 'react'
import './css/Resume.css'

const Resume = (props) => {
	return(
		<div className='resume-container'>
			<div className='technology entry'>
				<h2 className='resume-header'>Technologies</h2>
				<section className='technology-section'>
					<div>
						<h3>Languages</h3>
						<ul>
							<li>
								<span>Javascript</span>
							</li>
							<li>
								<span>Python</span>
							</li>
						</ul>
					</div>
					<div>
						<h3>Web</h3>
						<ul>
							<li>
								<span>React</span>
							</li>
							<li>
								<span>Redux</span>
							</li>
							<li>
								<span>HTML</span>
							</li>
							<li>
								<span>CSS</span>
							</li>
						</ul>
					</div>
					<div>
						<h3>Ops / Backend / Tools</h3>
						<ul>
							<li>
								<span>AWS</span>
							</li>
							<li>
								<span>Puppet</span>
							</li>
							<li>
								<span>Terraform</span>
							</li>
							<li>
								<span>Atlassian</span>
							</li>
							<li>
								<span>Git</span>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div className='resume-content'>
				<div className='experience entry'>
					<h2 className='resume-header'>Work Experience</h2>
					<section className='experience-section'>
						<div>
							<h3>SOFTWARE DEVELOPER</h3>
							<h3><span className='experience-co'>IDEX, ASA</span>, Wilmington, MA, March 2017 - August 2018</h3>
							<ul>
								<li>
									<p className='experience-text'>Software developer in DevOps and automation responsible
						for implementing features in a sensor testing harness and backend APIs in a
						release configuration management system. Created a user creation suite of CLI tools and SSO
						integrations to streamline user on boarding and termination. Built out entire AWS cloud infrastructure.</p>
								</li>
							</ul>
						</div>

					</section>
				</div>
				<div className='education entry'>
					<h2 className='resume-header'>Education</h2>
				</div>
				<div className='projects entry'>
					<h2 className='resume-header'>Projects</h2>
				</div>
			</div>
		</div>
	)
}

export default Resume