import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const ConnectedButton = (props) => {
	const disabled = props.loading
	return (
		<Link to={props.link} className={`btn ${disabled ? "isDisabled" : ""}`} onClick={props.onClick}>{props.text}</Link>
	)
}

export default connect((state) => ({
	loading: state.loading,
}))(ConnectedButton)