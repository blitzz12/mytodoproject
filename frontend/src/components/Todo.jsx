import todoStyle from '../styles/components/todoContainer.module.scss';

import { deleteTodo, updateTodo } from '../features/todos/todoSlice';
import { useDispatch } from 'react-redux'

function Todo({task, id, completed}) {
  
  const dispatch = useDispatch()
  
  const handleCompleted = () => {
    dispatch(updateTodo({id, newData: {completed: !completed}}))
  }

  
  return (
    <div className={todoStyle.todo}>
      <div className={todoStyle.roundCheckbox}>
          <input type="checkbox" id={id} checked={completed} onChange={handleCompleted}/>
          <label htmlFor={id}></label>
      </div>
        <p className={completed ? todoStyle.checked : ''}>{task}</p>
        <div onClick={(e) => dispatch(deleteTodo(id))} className={todoStyle.delete}>
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </div>
    </div>
  )
}
export default Todo