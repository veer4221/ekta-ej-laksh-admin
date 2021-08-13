import { authConstants, userContants } from '../constants'
import axios from '../../helper/axios'
import {
  createNewUserAPI,
  getAllUserAPI,
  removeUserAPI,
  getUserByIdAPI,
  editOldUserAPI,
} from '../../api/index'
export const addUser = (user) => {
  console.log(user)

  return async (dispatch) => {
    dispatch({ type: userContants.ADD_USER_REQUEST })
    const res = await createNewUserAPI(user)
    console.log('res', res)
    if (res.status === 200 && res.data.success == true) {
      console.log(true)
      const { message } = res.data
      dispatch({
        type: userContants.ADD_USER_SUCCESS,
        payload: { message },
      })
    } else {
      if (res.status === 200 && res.data.success == false) {
        dispatch({
          type: userContants.ADD_USER_FAILURE,
          payload: { error: res.data.error },
        })
      }
    }
  }
}

export const resetUserState = () => {
  return async (dispatch) => {
    dispatch({ type: userContants.RESET_STATE })
  }
}

export const getUserListAction = (page, limit, keyword) => {
  return async (dispatch) => {
    dispatch({ type: userContants.VIEW_ALL_USER_REQUEST })
    console.log('action', keyword)
    const res = await getAllUserAPI(page, limit, keyword)
    const { success } = res.data

    if (res.status === 200 && success == true) {
      const { count, rows, success } = res.data
      dispatch({ type: userContants.VIEW_ALL_USER_SUCCESS, payload: { count, rows, success } })
    }
    if (res.status === 200 && success == false) {
      const { error } = res.data

      dispatch({ type: userContants.VIEW_ALL_USER_FAILURE, payload: { error } })
    }
  }
}

export const deleteUserAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: userContants.DELETE_USER_REQUEST })
    const res = await removeUserAPI(id)
    const { success } = res.data
    if (res.status === 200 && success == true) {
      const { count, rows, success } = res.data
      dispatch({ type: userContants.DELETE_USER_SUCCESS, payload: { message: `User Is Deleted` } })
    }
    if (res.status === 200 && success == false) {
      // const { error } = res.data

      dispatch({
        type: userContants.DELETE_USER_FAILURE,
        payload: { error: `something is wronge` },
      })
    }
  }
}

export const viewUserAction = (id) => {
  return async (dispatch) => {
    dispatch({ type: userContants.VIEW_USER_REQUEST })
    const res = await getUserByIdAPI(id)
    console.log(res)
    const { success } = res.data
    if (res.status === 200 && success == true) {
      const { adminUser } = res.data
      dispatch({ type: userContants.VIEW_USER_SUCCESS, payload: { userInfo: adminUser } })
    }
  }
}

export const editUserAction = (user) => {
  console.log(user)

  return async (dispatch) => {
    dispatch({ type: userContants.UPDATE_USER_REQUEST })
    const res = await editOldUserAPI(user)
    console.log('res', res)
    if (res.status === 200 && res.data.success == true) {
      console.log(true)
      const { message } = res.data
      dispatch({
        type: userContants.UPDATE_USER_SUCCESS,
        payload: { message: `user is updated` },
      })
    } else {
      if (res.status === 200 && res.data.success == false) {
        dispatch({
          type: userContants.UPDATE_USER_FAILURE,
          payload: { error: res.data.error },
        })
      }
    }
  }
}
