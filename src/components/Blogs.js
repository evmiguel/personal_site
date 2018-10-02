import React, { Component } from 'react'
import Blog from './Blog'
import { connect } from 'react-redux'

class Blogs extends Component {
  render() {
    const { loading, blogs } = this.props

    return(
      <ul>
        {
          blogs.map((blog, index) => (
            <li><Blog key={index} blog={blog}/></li>
          ))
        }
      </ul>
    )
  }
}

export default connect((state) => ({
  blogs: state.blogs
}))(Blogs)