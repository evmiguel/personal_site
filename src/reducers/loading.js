import {
  RECEIVE_DATA,
  LOADING
} from '../actions/shared'

export default function loading (state = false, action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return false
    case LOADING :
    	return true
    default :
      return state
  }
}