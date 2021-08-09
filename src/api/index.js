import axios from '../helper/axios'

//AUTH API
export const loginAPI = (user) => axios.post(`/v1/auth/login`, { ...user })

//USER API
export const createNewUserAPI = (user) => axios.post(`/v1/user/signup`, { ...user })
export const getAllUserAPI = (page, limit, keyword) =>
  axios.get(`/v1/user/getAllUsers?page=${page}&limit=${limit}&keyword=${keyword}`)
export const removeUserAPI = (id) => axios.get(`/v1/user/changeStatus?status=0&id=${id}`)
export const getUserByIdAPI = (id) => axios.get(`v1/user/getUser?id=${id}`)
