import { createAsyncThunk, createSlice, createSelector } from "@reduxjs/toolkit";
import todoService from "./todoService";

const initialState = {
  todos: [],
  isFiltering: false,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: ''
}

export const getTodos = createAsyncThunk('todo/getAll', async(_, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await todoService.getAllTodos(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

export const createTodo = createAsyncThunk('todo/createNew', async(newTask, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await todoService.createTodo(newTask, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
}) 

export const deleteTodo = createAsyncThunk('todo/delete', async (id, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await todoService.deleteTodo(id, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})

export const updateTodo = createAsyncThunk('todo/update', async ({id, newData}, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token

    return await todoService.updateTodo(id, newData, token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

    return thunkAPI.rejectWithValue(message)
  }
})


const selectTodos = state => state.todos
export const getCompletedTodos = createSelector(selectTodos, todos => todos.filter(todo => todo.completed))

export const getActiveTodos = createSelector(selectTodos, todos => todos.filter(todo => !todo.completed))

export const getAllTodos = createSelector(selectTodos, todos => todos.map(todo => todo))

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    resetTodo: (state) => {
      state.isLoading = false
      state.isSuccess = false
      state.message = ''
      state.isError = false
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getTodos.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = action.payload
      })
      .addCase(getTodos.rejected, (state, action) => {
        state.isLoading= false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createTodo.pending, state => {
        state.isLoading = true
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = [...state.todos, action.payload]
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deleteTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deleteTodo.fulfilled, (state, action) => {
        state.isLoading= false
        state.isSuccess= true
        state.todos = state.todos.filter(todo => todo._id !== action.payload.id)
      })
      .addCase(deleteTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updateTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateTodo.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = state.todos.map(todo => {
          if (todo._id === action.payload._id) {
            return action.payload
          } else {
            return todo
          }
        })
      })
      .addCase(updateTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})


export const { resetTodo } = todoSlice.actions
export default todoSlice.reducer