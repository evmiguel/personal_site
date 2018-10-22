import React, { Component } from 'react'
import BlogLink from './BlogLink'
import  './css/Blogs.css'
import { connect } from 'react-redux'

class Blogs extends Component {
  render() {
    return(
        <ul className='blog-list'>
          {
            this.props.blogIds.map(blogId => (
              <li key={blogId} ><BlogLink id={blogId}/></li>
            ))
          }
        </ul>
    )
  }
}

function mapStateToProps({ blogs }){
  return {
    blogIds: Object.keys(blogs)
      .sort((a,b) => Date.parse(blogs[b].date) - Date.parse(blogs[a].date))
  }
}

export default connect(mapStateToProps)(Blogs)