import { postContants } from '../constants'

const initState = {
  error: null,
  message: '',
  getPostInfo: {},
  loading: false,
  getAllProduct: {
    count: null,
    rows: [],
  },
}

export default (state = initState, action) => {
  switch (action.type) {
    case postContants.ADD_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case postContants.ADD_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: null,
      }
      break
    case postContants.ADD_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      }
      break
    case postContants.RESET_STATE:
      state = initState
      break
    case postContants.VIEW_ALL_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case postContants.VIEW_ALL_POST_SUCCESS:
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
    case postContants.VIEW_ALL_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      }
      break
    case postContants.DELETE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case postContants.DELETE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: null,
      }
      break
    case postContants.DELETE_POST_FAILURE:
      state = {
        ...state,
        loading: false,
        error: action.payload.error,
        message: null,
      }
      break
    case postContants.VIEW_POST_REQUEST:
      state = {
        ...state,
        loading: true,
        getPostInfo: {},
      }
      break
    case postContants.VIEW_POST_SUCCESS:
      console.log('waiting')
      state = {
        ...state,
        loading: false,
        getPostInfo: action.payload.postInfo,
      }
    case postContants.UPDATE_POST_REQUEST:
      state = {
        ...state,
        loading: true,
      }
      break
    case postContants.UPDATE_POST_SUCCESS:
      state = {
        ...state,
        loading: false,
        message: action.payload.message,
        error: null,
      }
      break
    case postContants.UPDATE_POST_FAILURE:
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
