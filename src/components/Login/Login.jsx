import styles from './Login.module.css'
import { useContext } from "react";

import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";

const LoginFormKeys = {
  Email: 'email',
  Password: 'password'
};


export const Login = () => {
  const { onLoginSubmit } = useContext(AuthContext);
  const { values, changeHandler, onSubmit } = useForm({
    [LoginFormKeys.Email]: '',
    [LoginFormKeys.Password]: '',
  }, onLoginSubmit);


  return (
    <div>
      <h2 className={styles.h2}>Login Page</h2><br />
      <div className={styles.loginForm}>
        <form method="POST" onSubmit={onSubmit}>
          <label htmlFor='email'>Email</label>
          <input type="email"  className={styles.Uname} id='email' placeholder="Email" name={LoginFormKeys.Email} value={values[LoginFormKeys.Email]} onChange={changeHandler} />
          <br /><br />
          <label htmlFor='password'>Password</label>
          <input type="password" id='password' className={styles.Pass} placeholder="Password" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler} />
          <br /><br />
          <input type="submit" name="log" className={styles.log} value="Log In Here" />
          <br /><br />
        </form>
      </div>
    </div>
  )
}
