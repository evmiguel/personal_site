export const RECEIVE_DATA =  'RECEIVE_DATA'
export const LOADING = 'LOADING'
export const TEAR_DOWN = "TEAR_DOWN"

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

function tearDown() {
	return {
		type: TEAR_DOWN
	}
}

export function handleLoading() {
	return (dispatch) => {
		dispatch(load())
	}
}

export function handleLoadingTearDown() {
	return (dispatch) => {
		dispatch(tearDown())
	}
}