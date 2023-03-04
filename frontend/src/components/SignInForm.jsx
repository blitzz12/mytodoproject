import style from '../styles/components/form.module.scss';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { reset, login } from '../features/auth/authSlice'
import { useNavigate }from 'react-router-dom'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './Spinner';

function SignInForm() {
  const { user, isSuccess, isError, message, isLoading } = useSelector(state => state.auth);

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })

 

  const onChange = (e) => {
    setFormData(prevState => (
      {
        ...prevState,
        [e.target.name]: e.target.value
      }
    ))
  }

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if ((user && user.name) && isSuccess) {
      navigate('/')
    }

    dispatch(reset())

  }, [isError, message, isSuccess, navigate, user, dispatch])
  
  const signin = (e) => {
    e.preventDefault()

    dispatch(login(formData))
    
  }

  if (isLoading) {
    return <Spinner />
  }
  return (
    <div className={style.formContainer}>
            <main>
              <form onSubmit={signin}>
                <h2>Sign In</h2>
                <div>
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" onChange={onChange}/>
                </div>
                <div>
                  <label htmlFor="password">Password</label>
                  <input type="password" name="password" onChange={onChange}/>
                </div>
                <div>
                <input type="submit" value="Sign In" className={style.signin}/>
                </div>
                <div className={style.register}>
                  <Link to='/register'>
                    Register
                  </Link>
                </div>
              </form>
            </main>
          </div>
  )
}
export default SignInForm