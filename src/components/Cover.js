import React, { Component } from 'react'
import './css/Cover.css';
import { connect } from 'react-redux'
import ConnectedBlogs from './Blogs'
import ConnectedButton from './Button'
import Loader from './Loader'
import {
  handleInitialBlogData,
  handleTearDownBlogs
} from '../actions/blogs'
import {
	handleLoading,
	handleLoadingTearDown
} from '../actions/shared'

class Cover extends Component {
	blogClick  = () => {
		const { dispatch, blogs } = this.props
		if (!blogs.length > 0) {
			dispatch(handleLoading())
			dispatch(handleInitialBlogData())
		}
	}

	aboutClick = () => {
		const { dispatch, blogs, loading } = this.props
		if ( loading ) { dispatch(handleLoadingTearDown()) }
		if ( blogs.length > 0 ) { dispatch(handleTearDownBlogs()) }
	}
	render () {
		return (
			<div>
				<section className="intro">
					<div className="inner">
						<div className="content">
							<h1>Erika Miguel</h1>
							<div className="icons">
								<ConnectedButton name="aboutButton" onClick={this.aboutClick} text="About" />
								<ConnectedButton name="blogButton" onClick={this.blogClick} text="Blog" />
							</div>
						</div>
					</div>
				</section>
					{

						this.props.loading &&
						<section className="loading__section">
							<Loader />
						</section>

					}
				<section>
					<ConnectedBlogs />
				</section>
			</div>
		)
	}
}

export default connect((state) => ({
	loading: state.loading,
	blogs: state.blogs
}))(Cover)