import { combineReducers } from 'redux'
import authReducer from './auth.reducer'
import userReducer from './user.reducer'
import postReducer from './post.reducer'

const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  post: postReducer,
})

export default rootReducer
