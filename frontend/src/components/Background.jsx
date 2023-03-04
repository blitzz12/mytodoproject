import style from '../styles/components/background.module.scss';
import { logout } from '../features/auth/authSlice';
import { useDispatch, useSelector } from 'react-redux'

import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

function Background() {
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const {theme} = useContext(ThemeContext)
  
  return (
      <>
        <div className={style.image}>
          <img src={theme === 'light' ? "/images/bg-desktop-light.jpg" : "/images/bg-desktop-dark.jpg"} alt="" />
        </div>
        <div className={style.userDetails}>
          <h2>Welcome {user.name}</h2>
          <p onClick={() => dispatch(logout())}>Logout</p>
        </div>
      </>
  )
}
export default Background