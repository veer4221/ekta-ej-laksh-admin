import { authConstants, postContants } from '../constants'
import axios from '../../helper/axios'
import { createPostAPI, getAllPostAPI, getPostByIdAPI, removePostAPI } from '../../api/index'
export const addPostAction = (post) => {
  console.log(post)

  return async (dispatch) => {
    dispatch({ type: postContants.ADD_POST_REQUEST })
    const res = await createPostAPI(post)
    console.log('res', res)
    if (res.status === 200 && res.data.success == true) {
      console.log(true)
      const { message } = res.data
      dispatch({
        type: postContants.ADD_POST_SUCCESS,
        payload: { message },
      })
    } else {
      if (res.status === 200 && res.data.success == false) {
        dispatch({
          type: postContants.ADD_POST_FAILURE,
          payload: { error: res.data.error },
        })
      }
    }
  }
}

export const resetPostStateAction = () => {
  return async (dispatch) => {
    dispatch({ type: postContants.RESET_STATE })
  }
}

export const getPostListAction = (page, limit, keyword) => {
  return async (dispatch) => {
    dispatch({ type: postContants.VIEW_ALL_POST_REQUEST })
    console.log('action', keyword)
    const res = await getAllPostAPI(page, limit, keyword)
    const { success } = res.data

    if (res.status === 200 && success == true) {
      const { count, rows, success } = res.data
      dispatch({ type: postContants.VIEW_ALL_POST_SUCCESS, payload: { count, rows, success } })
    }
    if (res.status === 200 && success == false) {
      const { error } = res.data

      dispatch({ type: postContants.VIEW_ALL_POST_FAILURE, payload: { error } })
    }
  }
}

export const deletePostAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: postContants.DELETE_POST_REQUEST })
    const res = await removePostAPI(id)
    const { success } = res.data
    if (res.status === 200 && success == true) {
      const { count, rows, success } = res.data
      dispatch({ type: postContants.DELETE_POST_SUCCESS, payload: { message: `Post Is Deleted` } })
    }
    if (res.status === 200 && success == false) {
      // const { error } = res.data

      dispatch({
        type: postContants.DELETE_POST_FAILURE,
        payload: { error: `something is wronge` },
      })
    }
  }
}

export const viewPostAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: postContants.VIEW_POST_REQUEST })
    const res = await getPostByIdAPI(id)
    console.log(res.data.post)
    const { success } = res.data
    if (res.status === 200 && success == true) {
      const { post } = res.data
      dispatch({ type: postContants.VIEW_POST_SUCCESS, payload: { postInfo: post } })
    }
  }
}
