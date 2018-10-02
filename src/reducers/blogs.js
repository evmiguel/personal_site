import {
  RECEIVE_DATA
} from '../actions/shared'

export default function blogs (state = [], action) {
  switch(action.type) {
    case RECEIVE_DATA :
      return action.blogs
    default :
      return state
  }
}