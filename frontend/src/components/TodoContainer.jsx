import Logo from './Logo'
import style from '../styles/components/todoContainer.module.scss';
import TodoLists from './TodoLists';

import  { useRef, useContext, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createTodo } from '../features/todos/todoSlice'

import { ThemeContext } from '../context/ThemeContext';

function TodoContainer() {
  const task = useRef(null)
  const dispatch = useDispatch()

  const {theme, setTheme} = useContext(ThemeContext)

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])
  
  const handleNewTask = (e) => {
    if (e.key === 'Enter') {
      dispatch(createTodo({task: task.current.value}))
      task.current.value = ''
    }
  }
  
  return (
    <div className={`${style.container} ${style[theme]}`}>
      <div className={style.logo}>
        <Logo />
        <img src={theme === 'light' ? '/images/icon-moon.svg' : '/images/icon-sun.svg'} alt="theme-mode" 
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        />
      </div>
      <div className={`${style.todo} ${style.inputTodo}`}>
        <div className={style.roundCheckbox}>
          <input type="checkbox" id='check' checked={false} readOnly/>
          <label htmlFor="check"></label>
        </div>
        <input type="text" name="newTask" ref={task} onKeyDown={handleNewTask} placeholder='Create a new todo...'/>
      </div>
      <TodoLists />
    </div>
  )
}
export default TodoContainer