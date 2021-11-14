import axios from '../helper/axios'

//AUTH API
export const loginAPI = (user) => axios.post(`/v1/auth/login`, { ...user })

//USER API
export const createNewUserAPI = (user) => axios.post(`/v1/user/signup`, { ...user })
export const getAllUserAPI = (page, limit, keyword) =>
  axios.get(`/v1/user/getAllUsers?page=${page}&limit=${limit}&keyword=${keyword}`)
export const removeUserAPI = (id) => axios.get(`/v1/user/changeStatus?status=0&id=${id}`)
export const getUserByIdAPI = (id) => axios.get(`/v1/user/getUser?id=${id}`)
export const editOldUserAPI = (user) => axios.post(`/v1/user/updateUser`, { ...user })

//POST API
export const createPostAPI = (post) => axios.post(`/v1/post/addPost`, post)
export const getPostByIdAPI = (id) => axios.get(`/v1/post/getPost?id=${id}`)
export const getAllPostAPI = (page, limit, keyword) =>
  axios.get(`v1/post/getAllPost?page=${page}&limit=${limit}&keyword=${keyword}`)
export const removePostAPI = (id) => axios.get(`/v1/post/removePost?status=0&id=${id}`)

export const createBusinessAPI = (data) => axios.post(`v1/business/addbusiness`, data)
export const getAllBusinessApi = () => axios.get(`/v1/business/getAllBusiness`)
