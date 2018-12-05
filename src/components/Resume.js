import React, { Component } from 'react'
import './css/Resume.css'

class Resume extends Component {
	state = {
		showResumeButton: false
	}
	render() {
		return(
		<div className='resume-container'>
			<div className='download'>
				<a href='https://s3.amazonaws.com/evm-resumes/EVM_Resume_12052018.pdf'
				target='_blank' rel='noopener noreferrer'>DOWNLOAD RESUME</a>
			</div>
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
							<h3>OPEN WEB ENGINEER</h3>
							<h3><span className='experience-co'>Bocoup</span>, Boston, MA, January 2019 - </h3>
						</div>
						<div>
							<h3>SOFTWARE DEVELOPER</h3>
							<h3><span className='experience-co'>IDEX Biometrics</span>, Wilmington, MA, March 2017 - August 2018</h3>
							<ul>
								<li>
									<p className='experience-text'>Software developer in DevOps and automation responsible
						for implementing features in a sensor testing harness and backend APIs in a
						release configuration management system. Created a user creation suite of CLI tools and SSO
						integrations to streamline user on boarding and termination. Built out entire AWS cloud infrastructure.</p>
								</li>
							</ul>
						</div>
						<div>
							<h3>DEVOPS ENGINEER</h3>
							<h3><span className='experience-co'>Perka</span>, New York, NY, April 2016 - March 2017</h3>
							<ul>
								<li>
									<p className='experience-text'>Sole DevOps engineer on Platform team at the time. Served
									on 24/7 call for production outages. Managed AWS infrastructure, SSL certs, server configuration,
									and user on boarding / termination. Handled production deployment, PostgreSQL database migration,
									and logging system</p>
								</li>
							</ul>
						</div>
						<div>
							<h3>ANALYST SOFTWARE DEVELOPER</h3>
							<h3><span className='experience-co'>Goldman Sachs</span>, New York, NY, July 2015 - April 2016</h3>
							<ul>
								<li>
									<p className='experience-text'>DevOps engineering role in Global Investment
									Research; automated deployments and migrated apps to new config service. Software
									developer role in Prime Services division; developed access controlled file processing
									feature for legacy app</p>
								</li>
							</ul>
						</div>
					</section>
				</div>
				<div className='education entry'>
					<h2 className='resume-header'>Education</h2>
					<section className='education-section'>
						<div>
							<h3>SMITH COLLEGE</h3>
							<h4>Bachelor of Arts, Computer Science</h4>
							<h4>September 2011 - May 2015</h4>
						</div>
						<div>
							<h3>UDACITY</h3>
							<h4>Nanodegree, React Developer</h4>
							<h4>September 2018 - November 2018</h4>
						</div>
						<div>
							<h3>UDACITY</h3>
							<h4>Nanodegree, Front End Web Developer</h4>
							<h4>September 2018 - December 2018</h4>
						</div>
						<div>
							<h3>COURSERA</h3>
							<h4>Algorithms and Data Structures Specialization</h4>
							<h4>October 2018 - Present</h4>
						</div>
					</section>
				</div>
				<div className='awards entry'>
					<h2 className='resume-header'>Awards</h2>
					<section className='awards-section'>
						<div>
							<h3>GIRL DEVELOP IT BOSTON - 2ND ANNUAL HACKATHON</h3>
							<h4>"Best Tech" with Amazon Fire HD 8 prize</h4>
						</div>
					</section>
				</div>
			</div>
		</div>
		)
	}
}

export default Resume