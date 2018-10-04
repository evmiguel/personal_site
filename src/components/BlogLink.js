import React, { Component } from 'react'
import  './css/Blogs.css'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class BlogLink extends Component {
	render() {
		const { id } = this.props
		return (
				<div className="blog__item">
					<Link to={`/blog/${id}`} >
						<h1 className="blog__heading">{this.props.blog.title}</h1>
					</Link>
				</div>
	)
	}
}

function mapStateToProps({ blogs }, { id }){
	return {
		blog: blogs[id]
	}
}
export default withRouter(connect(mapStateToProps)(BlogLink))