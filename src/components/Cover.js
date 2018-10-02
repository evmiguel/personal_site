import React, { Component } from 'react'
import './Cover.css';
import { connect } from 'react-redux'
import ConnectedBlogs from './Blogs'
import {
  handleInitialBlogData,
} from '../actions/blogs'

class Cover extends Component {
	blogClick  = () => {
		const { dispatch } = this.props
    	dispatch(handleInitialBlogData())
	}
	render () {
		return (
			<div>
				<section className="intro">
					<div className="inner">
						<div className="content">
							<h1>Erika Miguel</h1>
							<div className="icons">
								<a className="btn" href="#">About</a>
								<a className="btn" href="#" onClick={this.blogClick}>Blog</a>
							</div>
						</div>
					</div>
				</section>
				<section>
					<ConnectedBlogs />
				</section>
			</div>
		)
	}
}

export default connect((state) => ({}))(Cover)