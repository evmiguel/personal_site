import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

/* TODO: access this data with an API */
const blogs = [
		{
			name: 'Blog 1',
			id: 1,
			content: 'Content for blog 1'
		},
		{
			name: 'Blog 2',
			id: 2,
			content: 'Content for blog 2'
		},
		{
			name: 'Blog 3',
			id: 3,
			content: 'Content for blog 3'
		}
	]

const BlogPost = ({ match }) => {
	const post = blogs.find(({id}) => id === parseInt(match.params.blogId))
	return(
		<div className='blog-post'>
			<h3>{post.name}</h3>
			<p>{post.content}</p>
		</div>
	)
}


const Blog = ({ match }) => {
	return(
		<div className='blog-posts'>
			<h2>Blog Posts</h2>
			<ul>
				{
					blogs.map(blog => 
						<li key={blog.id}>
							<Link to={`${match.url}/${blog.id}`}>{blog.name}</Link>
						</li>)
				}
			</ul>
			<Route path={`${match.path}/:blogId`} component={BlogPost} />
		</div>
	)
}

export default Blog 