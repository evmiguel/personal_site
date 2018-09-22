import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'

/* TODO: access this data with an API */
const infoData = [
	{
		name: 'About',
		id: 'about',
		content: 'About me'
	},
	{
		name: 'Contact',
		id: 'contact',
		content: 'Contact me'
	},
	{
		name: 'Resume',
		id: 'resume',
		content: 'Resume'
	}
]

class InfoComponent extends Component {
	render() {
		console.log(this.props.match)
		const component = infoData.find(({ id }) => ( id === this.props.match.params.infoId ) ) 
		return(
			<div className='info-component'>
				<h3>{component.name}</h3>
				<p>{component.content}</p>
			</div>
		)
	}

}

class Info extends Component {
	render() {
		return(
			<div className='info-list'>
				<ul>
					{
						infoData.map(data =>
							<li>
								<Link to={`${this.props.match.url}/${data.id}`}>{data.name}</Link>
							</li>
						)
					}	
				</ul>
				<Route path={`${this.props.match.path}/:infoId`} component={InfoComponent} />
			</div>
		)
	}

}

export default Info