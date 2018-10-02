import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Blogs from './Blogs'
import Info from './Info'

function Website({ match }) {
	return(
		<div className='website-portal'>
				<Link className='info-link' to='/info'>Info</Link>
				<Link className='blog-link' to='/blog'>Blog</Link>
			<Route path='/info' component={Info} />
			<Route path='/blog' component={Blogs} />
		</div>
	)
}

export default Website