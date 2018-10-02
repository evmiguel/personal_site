import { combineReducers } from 'redux'

import loading from './loading'
import blogs from './blogs'

export default combineReducers({
  loading,
  blogs,
})