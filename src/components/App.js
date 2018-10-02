import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import './css/App.css';
import ConnectedCover from './Cover'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">


      <Route exact path="/"
            render={() => ( <ConnectedCover renderAbout={true} /> )}
      />

      <Route path="/blog"
            render={() => ( <ConnectedCover renderBlog={true}/> )}
      />

      </div>
    );
  }
}

/** connector function that returns an App Component
	conntected to the store */
export default connect((state) => ({
  state: state
}))(App)
