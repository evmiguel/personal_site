import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './App.css';
import ConnectedCover from './Cover'
import { connect } from 'react-redux'
import {
  handleInitialData
} from '../actions/shared'


class App extends Component {
  render() {
    return (
      <div className="App">
      	<ConnectedCover />
      </div>
    );
  }
}

/** connector function that returns an App Component
	conntected to the store */
export default connect((state) => ({
  state: state
}))(App)
