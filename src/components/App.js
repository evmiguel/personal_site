import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './css/App.css';
import Page from './Page'
import { connect } from 'react-redux'
import Blogs from './Blogs'
import BlogPost from './BlogPost'
import { handleInitialBlogData } from '../actions/blogs'
import About from './About'
import Resume from './Resume'
import { FaLinkedin, FaGithub, FaInstagram, FaAirbnb } from 'react-icons/fa';

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
          <Route path="/resume" component={Resume} />
          <Route exact path="/blog" component={Blogs}/>
          <Route path="/blog/:id" component={BlogPost} />

        <footer className="app__footer">
          <nav className='social-media'>
            <a href="https://github.com/evmiguel" target='_blank'><FaGithub className='icon'/></a>
            <a href="https://www.linkedin.com/in/evmiguel" target="_blank"><FaLinkedin className='icon'/></a>
            <a href="https://www.instagram.com/evmigz" target='_blank'><FaInstagram className='icon'/></a>
          </nav>
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
