import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './Redux/Reducers/index'
import thunk from 'redux-thunk'
import { combineReducers } from 'redux'

const initialState = {
  sidebarShow: false,
}

export const changeState = (state = initialState, { type, ...rest }) => {
  switch (type) {
    case 'set':
      return { ...state, ...rest }
    default:
      return state
  }
}

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

export default store
