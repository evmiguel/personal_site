import {
  TEAR_DOWN,
  receiveData
} from '../actions/shared'

function generateId () {
  return Math.random().toString(36).substring(2);
}

// This is a thunk, whereby a function is dispatched, instead of an action
// The action will be delayed until the "GET request" has been made
export function handleInitialBlogData () {
  return (dispatch) => {
    fetch("https://api.erikamiguel.com/blog")   // This is my personal API. Check it out!
      .then(data => data.json())
      .catch(err => alert("There was an error!"))
      .then(data => dispatch(receiveData(data.posts.sort((a,b) => {
              return Date.parse(b.date) - Date.parse(a.date)
          })
        ))) // send action to the store.
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