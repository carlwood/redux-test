import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import counterReducer from './counter'
import postsReducer from './posts'

const rootReducer = (history) => combineReducers({
  count: counterReducer,
  posts: postsReducer,
  router: connectRouter(history)
})

export default rootReducer
