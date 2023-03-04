import { Link } from 'react-router-dom';
import style from '../styles/components/form.module.scss';
import {toast} from 'react-toastify';

import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { register, reset } from '../features/auth/authSlice';
import { useEffect } from 'react';
import Spinner from './Spinner';


function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { user, isLoading, isError, isSuccess, message } = useSelector(state => state.auth)

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (user || isSuccess) {
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  })

  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    })
  )}

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== password2) {
      toast.error('Password do not match')
    }

    else {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    }
  }

  if (isLoading) {
    return <Spinner />
  }
 

  return (
    <div className={style.formContainer}>
    <main>
      <form onSubmit={onSubmit}>
        <h2>Register</h2>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" onChange={onChange}/>
        </div>
        <div>
          <label htmlFor="password">Enter Password Again</label>
          <input type="password" name="password2" onChange={onChange}/>
        </div>
        <div>
          <input type="submit" value="Register" className={style.signin}/>
        </div>
        <div className={style.register}>
          <Link to='/signin'>
            Signin
          </Link>
        </div>
      </form>
  </main>
</div>
  )
}
export default Register