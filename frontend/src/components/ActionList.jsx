import style from '../styles/components/todoFooter.module.scss';

import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';

function ActionList({filter, setFilter}) {

  const {theme} = useContext(ThemeContext)
  
  
  return (
    <div className={`${style.action} ${style[theme]}`}>
      <p onClick={() => setFilter('all')} className={filter === 'all' ? style.active : ''}>All</p>
      <p onClick={() => setFilter('active')} className={filter === 'active' ? style.active : ''}>Active</p>
      <p onClick={() => setFilter('completed')} className={filter === 'completed' ? style.active : ''}>Completed</p>
    </div>
  )
}
export default ActionList