import {
  RECEIVE_DATA,
  TEAR_DOWN,
  receiveData
} from '../actions/shared'

function generateId () {
  return Math.random().toString(36).substring(2);
}

const blogs = [
  {
    id: generateId(),
    title: "Hello, Welcome to My Blog!",
    date: "October 2, 2018",
    author: "Erika Miguel",
    content: "This is my first ever post! I built this site from scratch, and I'm very excited about it."
  },
  {
    id: generateId(),
    title: "This is my second post!",
    date: "October 2, 2018",
    author: "Erika Miguel",
    content: "For testing"
  },
  {
    id: generateId(),
    title: "This is my third post!",
    date: "October 2, 2018",
    author: "Erika Miguel",
    content: "For testing"
  }
]

// This is a thunk, whereby a function is dispatched, instead of an action
// The action will be delayed until the "GET request" has been made
export function handleInitialBlogData () {
  return (dispatch) => {
    return new Promise((res, rej) => {
    	setTimeout(() => {
        res(blogs)
    	}, 3000)
    }).then((blogs) => {
      dispatch(receiveData(blogs)) // send action to the store.
      							               // store will then return a new state based on the reducer
    })
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