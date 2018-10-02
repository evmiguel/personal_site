import {
  RECEIVE_DATA
} from '../actions/shared'


function receiveData (blogs) {
  return {
    type: RECEIVE_DATA,
    blogs
  }
}

// This is a thunk, whereby a function is dispatched, instead of an action
// The action will be delayed until the "GET request" has been made
export function handleInitialBlogData () {
  return (dispatch) => {
    return new Promise((res, rej) => {
    	setTimeout(() => {
        const blogs = ["blog1", "blog2", "blog3"]
        res(blogs)
    	}, 3000)
    }).then((blogs) => {
      dispatch(receiveData(blogs)) // send action to the store.
      							               // store will then return a new state based on the reducer
    })
  }
}