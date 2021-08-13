import { userContants } from '../constants'

const initState = {
  error: null,
  message: '',
  loading: false,
  getUserInfo: {},
  getAllProduct: {
    count: null,
    rows: [],
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case userContants.ADD_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case userContants.ADD_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: null,
      }
      break
    case userContants.ADD_USER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      }
      break
    case userContants.RESET_STATE:
      state = initState
      break
    case userContants.VIEW_ALL_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case userContants.VIEW_ALL_USER_SUCCESS:
      console.log(action)
      state = {
        ...state,
        loading: false,
        getAllProduct: {
          count: action.payload.count,
          rows: action.payload.rows,
        },
      }
      break
    case userContants.VIEW_ALL_USER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      }
      break
    case userContants.DELETE_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case userContants.DELETE_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: null,
      }
      break
    case userContants.DELETE_USER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      }
      break
    case userContants.VIEW_USER_REQUEST:
      state = {
        ...state,
        loading: true,
        getUserInfo: {},
      }
      break
    case userContants.VIEW_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        getUserInfo: action.payload.userInfo,
      }
    case userContants.UPDATE_USER_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case userContants.UPDATE_USER_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: null,
      }
      break
    case userContants.UPDATE_USER_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      }
      break
  }

  return state
}
