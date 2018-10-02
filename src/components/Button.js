import React from 'react'
import { connect } from 'react-redux'


const ConnectedButton = (props) => {
	const disabled = props.loading
	return (
		<a	id={props.name}
			className={`btn ${disabled ? "isDisabled" : ""}`}
			href="#" onClick={props.onClick}>
			{props.text}
		</a>
	)
}

export default connect((state) => ({
	loading: state.loading,
}))(ConnectedButton)