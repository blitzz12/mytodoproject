import axios from 'axios';

const API_URL = '/api/user/';


const registerUser = async (userData) => {
  const response = await axios.post(API_URL, userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }
  
  return response.data
}

const loginUser = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const logout = () => {
  localStorage.removeItem('user')
}

const getMe = async (token) => {
  const config = {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    
  const response = await axios.get(API_URL + 'me', config)

  return response.data
}

const authService = {
  registerUser,
  loginUser,
  logout,
  getMe
}

export default authService;