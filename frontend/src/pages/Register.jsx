import ParticleLoader from "../components/ParticleLoader"
import RegisterForm from "../components/RegisterForm";
import style from '../styles/pages/index.module.scss';

function Register() {
  return (
    <div className={style.main}>
      <ParticleLoader />
      <RegisterForm />
    </div>
  )
}
export default Register