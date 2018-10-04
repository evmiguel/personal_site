import React, { Component, Fragment } from 'react';
import { Route } from 'react-router-dom'
import './css/App.css';
import ConnectedPage from './Page'
import { connect } from 'react-redux'

class App extends Component {
  render() {
    return (
      <div className="App">


      <Route exact path="/"
            render={() => ( <ConnectedPage renderAbout={true} /> )}
      />

      <Route path="/blog"
            render={() => ( <ConnectedPage renderBlog={true}/> )}
      />

      <footer className="app__footer">
        <p>This page is powered by S3 static hosting, React, Redux, and Dynamodb. The entirety of this site has been created by Erika Miguel.</p>
      </footer>

      </div>
    );
  }
}

/** connector function that returns an App Component
	conntected to the store */
export default connect((state) => ({
  state: state
}))(App)
