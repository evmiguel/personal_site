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
	componentDidMount() {
		if (this.props.renderBlog === true){
			this.renderBlog()
		}
		else if (this.props.renderAbout === true){
			this.renderAbout()
		}
	}
	renderBlog  = () => {
		const { dispatch, blogs } = this.props
		if (!blogs.length > 0) {
			dispatch(handleLoading())
			dispatch(handleInitialBlogData())
		}
	}

	renderAbout = () => {
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
								<ConnectedButton name="aboutButton" onClick={this.renderAbout} link="/" text="About" />
								<ConnectedButton name="blogButton" onClick={this.renderBlog} link="blog" text="Blog" />
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