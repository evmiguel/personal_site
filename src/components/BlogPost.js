import React, { Component } from 'react'
import { connect } from 'react-redux'
import  './css/Blogs.css'
import { FaArrowLeft } from 'react-icons/fa';


class BlogPost extends Component {

	goBack = () => {
		this.props.history.push('/blog')
	}

	render() {
		return(
			<div>
				<FaArrowLeft className='back-btn' onClick={this.goBack} />
				<h1 className="blog__heading">{this.props.blogPost.title}</h1>
				<h4 className="blog__date">{this.props.blogPost.date}</h4>
				<p className="blog__content">{this.props.blogPost.content}</p>
			</div>

		)
	}
}

function mapStateToProps(state, props) {
	const { blogs } = state
	const { id } = props.match.params
	console.log(blogs, id)

	return {
		blogPost: !blogs[id]
			? []
			: blogs[id]
	}
}

export default connect(mapStateToProps)(BlogPost)