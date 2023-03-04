import style from '../styles/components/todoFooter.module.scss';
import ActionList from './ActionList';

import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {getActiveTodos, getCompletedTodos, deleteTodo} from '../features/todos/todoSlice';


function TodoFooter({setFilter, filter}) {
  const {theme} = useContext(ThemeContext)
  const dispatch = useDispatch()

  const activeTodoLeft = useSelector(state => getActiveTodos(state.todo)).length
  const completedTodo = useSelector(state => getCompletedTodos(state.todo))

  const handleClearCompleted = () => {
    completedTodo.forEach(todo => dispatch(deleteTodo(todo._id)))
  }

  return (
    <div className={`${style.footer} ${style[theme]}`}>
      <p>{activeTodoLeft} items left</p>
      <div className={style.displayActionList}>
        <ActionList setFilter={setFilter} filter={filter}/>
      </div>
      <p onClick={handleClearCompleted}>Clear Completed</p>
    </div>
  )
}
export default TodoFooter