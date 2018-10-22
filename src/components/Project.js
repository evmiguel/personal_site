import React from 'react'
import './css/Projects.css'

const Project = (props) => {
	return (
		<div>
			<h3>{props.name}</h3>
			<figure>
			  <a href={props.url} target="_blank" rel="noopener noreferrer">
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