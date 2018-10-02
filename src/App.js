import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Cover from './Cover'
import Website from './Website'
import { connect } from 'react-redux'
import {
  handleInitialData
} from './actions/loading'


class App extends Component {
  componentDidMount () {
    const { dispatch } = this.props

    dispatch(handleInitialData())
  }
  render() {
    if (this.props.loading === true) {
      return <h3>Loading</h3>
    }
    return (
      <div className="App">
      	<Cover />
      </div>
    );
  }
}

/** connector function that returns an App Component
	conntected to the store */
export default connect((state) => ({
  loading: state.loading
}))(App)
