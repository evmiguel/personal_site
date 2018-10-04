import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css';
import Page from './Page'
import { connect } from 'react-redux'
import Blogs from './Blogs'
import BlogPost from './BlogPost'
import { handleInitialBlogData } from '../actions/blogs'

const About = (props) => {
  return(
    <div> About </div>
  )
}

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialBlogData())
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Page />
          <Route exact path="/" component={About} />
          <Route exact path="/blog" component={Blogs}/>
          <Route path="/blog/:id" component={BlogPost} />

        <footer className="app__footer">
          <p>This page is powered by S3 static hosting, React, Redux, and Dynamodb. The entirety of this site has been created by Erika Miguel.</p>
        </footer>

        </div>
      </Router>
    );
  }
}

/** connector function that returns an App Component
	conntected to the store */

function mapStateToProps(state) {
  return {}
}
export default connect()(App)
