import {
  TEAR_DOWN,
  receiveData
} from '../actions/shared'

// This is a thunk, whereby a function is dispatched, instead of an action
// The action will be delayed until the "GET request" has been made
export function handleInitialBlogData () {
  return (dispatch) => {
    fetch("https://api.erikamiguel.com/blog")   // This is my personal API. Check it out!
      .then(data => data.json())
      .catch(err => alert("There was an error!"))
      .then(data => dispatch(receiveData({...data.posts}))) // send action to the store.
                                                        // store will then return a new state based on the reducer
  }
}

function tearDown() {
  return {
    type: TEAR_DOWN
  }
}

export function handleTearDownBlogs() {
  return (dispatch) => {
    dispatch(tearDown())
  }
}