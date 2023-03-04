import Todo from './Todo';
import TodoFooter from './TodoFooter';
import style from '../styles/components/todoList.module.scss';
import ActionList from './ActionList';

import { useSelector } from 'react-redux';
import { useContext, useState } from 'react';

import { getCompletedTodos, getActiveTodos, getAllTodos } from '../features/todos/todoSlice';

function TodoLists() {
  const [filter, setFilter] = useState('all');
  const todos  = useSelector(state => {
    if (filter === 'all') {
      return getAllTodos(state.todo)
    } else if (filter === 'active') {
      return getActiveTodos(state.todo)
    } else if (filter === 'completed') {
      return getCompletedTodos(state.todo)
    }
  })
 
  
  return (
    <>
      <div className={style.container}>
        {todos.map(todo => <Todo task={todo.task} key={todo._id} id={todo._id} completed={todo.completed}/>)}
        <TodoFooter setFilter={setFilter} filter={filter}/>
      </div>
      <ActionList setFilter={setFilter} filter={filter}/>
      {/* <p className={`${style.reorder} ${style[theme]}`}>Drag and drop to reorder list</p> */}
      </>
  )
}
export default TodoLists