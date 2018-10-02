export const RECEIVE_DATA =  'RECEIVE_DATA'

function receiveData (blogs) {
  return {
    type: RECEIVE_DATA,
    blogs
  }
}

// This is a thunk, whereby a function is dispatched, instead of an action
// The action will be delayed until the "GET request" has been made
export function handleInitialData () {
  return (dispatch) => {
    return new Promise((res, rej) => {
    	setTimeout(() => {
        res()
    	}, 3000)
    }).then((blogs) => {
      dispatch(receiveData(blogs)) // send action to the store.
      							   // store will then return a new state based on the reducer
    })
  }
}