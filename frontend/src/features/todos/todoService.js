import axios from 'axios'

const API_URL = '/api/todos/'



const createTodo = async (newTask, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.post(API_URL, newTask, config)

  return response.data
}



const getAllTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL, config)

  return response.data
}

const deleteTodo = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.delete(API_URL + id, config)

  return response.data
}

const updateTodo = async (id, newData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  }

  const response = await axios.put(API_URL + id, newData, config)

  return response.data
}

const todoService = {
  createTodo,
  getAllTodos,
  deleteTodo,
  updateTodo
}

export default todoService