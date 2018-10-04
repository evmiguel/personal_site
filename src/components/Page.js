import React, { Component } from 'react'
import './css/Page.css';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Page extends Component {
	render () {
		return (
			<div>
				<section className="intro">
					<div className="inner">
						<div className="content">
							<h1>Erika Miguel</h1>
							<div className="icons">
								<NavLink name="aboutButton" className="btn" to="/">About</NavLink>
								<NavLink name="blogButton" className="btn" to="/blog">Blog</NavLink>
							</div>
						</div>
					</div>
				</section>
			</div>
		)
	}
}

export default Page