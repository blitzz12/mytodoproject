import Background from "../components/Background"
import TodoContainer from "../components/TodoContainer"
import style from '../styles/pages/userHomePage.module.scss';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { reset } from '../features/auth/authSlice';
import Spinner from "../components/Spinner";

import { ThemeContext } from "../context/ThemeContext";
import { getTodos , resetTodo } from '../features/todos/todoSlice';


import { toast } from 'react-toastify';

function UserHomePage() {
  const {theme} = useContext(ThemeContext)
  
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user, isError, isLoading , message} = useSelector(state => state.auth);
  

  useEffect(() => {
    if (!user) {
      navigate('/signin')
    }
    
    if (user && user.name) {
      dispatch(getTodos())
    }

    if (isError) {
      toast.error(message)
    }
    
    dispatch(reset())
    dispatch(resetTodo())
  }, [user, dispatch, navigate, isError, message])

  if (isLoading || !user) {
    return <Spinner />
  }
  return (
    <div className={`${style.body} ${theme === 'light' ? style.light : style.dark}`}>
      <Background />
      <TodoContainer />
    </div>
  )
}
export default UserHomePage