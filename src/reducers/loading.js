import {
  RECEIVE_DATA,
  LOADING,
  TEAR_DOWN
} from '../actions/shared'

export default function loading (state = false, action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return false
    case LOADING :
    	return true
    case TEAR_DOWN :
      return false
    default :
      return state
  }
}