import React from 'react'
import  './css/Blogs.css'

const Blog = (props) => {
	return (
		<div className="blog__item">
			<h1 className="blog__heading">{props.blog.title}</h1>
			<h4 className="blog__date">{props.blog.date}</h4>
			<p className="blog__content">{props.blog.content}</p>
			<hr />
		</div>
	)
}

export default Blog