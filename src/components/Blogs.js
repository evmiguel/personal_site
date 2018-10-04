import React, { Component } from 'react'
import Blog from './Blog'
import  './css/Blogs.css'
import { connect } from 'react-redux'

class Blogs extends Component {
  render() {
    const { blogs } = this.props

    return(
        <ul>
          {
            blogs.map(blog => (
              <li key={blog.id} ><Blog blog={blog}/></li>
            ))
          }
        </ul>
    )
  }
}

export default connect((state) => ({
  blogs: state.blogs
}))(Blogs)