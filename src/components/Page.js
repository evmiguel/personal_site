import React, { Component } from 'react'
import './css/Page.css';
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'

class Page extends Component {
	render () {
		const { location } = this.props
		return (
			<div className='page-container'>
				<section className="intro">
					<div className="inner">
						<div className="content">
							<NavLink name="title" to="/"><h1>Erika Miguel</h1></NavLink>
							<div className="icons">
								<NavLink name="aboutButton" className={`btn ${(!location.pathname.includes('resume') && !location.pathname.includes('blog')) ? 'selected' : ''}`} to="/">About</NavLink>
								<NavLink name="resumeButton" className={`btn ${location.pathname.includes('resume') ? 'selected' : ''}`} to="/resume">Resume</NavLink>
								<NavLink name="blogButton" className={`btn ${location.pathname.includes('blog') ? 'selected' : ''}`} to="/blog">Blog</NavLink>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default withRouter(Page)