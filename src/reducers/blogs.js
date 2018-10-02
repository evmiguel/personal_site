import {
  RECEIVE_DATA,
  TEAR_DOWN
} from '../actions/shared'

export default function blogs (state = [], action) {
  switch(action.type) {
	case RECEIVE_DATA :
    	return action.blogs
	case TEAR_DOWN :
    	return []
    default :
    	return state
  }
}