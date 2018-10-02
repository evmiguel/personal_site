export const RECEIVE_DATA =  'RECEIVE_DATA'
export const LOADING = 'LOADING'

export function receiveData (blogs) {
  return {
    type: RECEIVE_DATA,
    blogs
  }
}

function load() {
	return {
		type: LOADING
	}
}

export function handleLoading() {
	return (dispatch) => {
		dispatch(load())
	}
}