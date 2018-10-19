import React from 'react'
import './css/Projects.css'

const Project = (props) => {
	return (
		<div>
			<h3>{props.name}</h3>
			<figure>
			  <a href="https://reactproj1.erikamiguel.com" target="_blank">
			  	<img src={props.img}
			    		alt={props.alt} />
			  </a>
			  <figcaption>{props.caption}
			  	<a href={props.repo} target='_blank'> Source code</a>
			  </figcaption>
			</figure>
		</div>
	)
}


export default Project