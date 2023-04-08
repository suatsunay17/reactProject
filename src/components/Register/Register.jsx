import styles from './myName.module.css'

import { useContext } from "react";

import { useForm } from "../../hooks/useForm"
import { AuthContext } from "../../contexts/AuthContext";

export const Register = () => {
    const { onRegisterSubmit } = useContext(AuthContext);
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        confirmPassword: '',
    }, onRegisterSubmit);

    return (
        <div>
            <h2 className={styles.h2}>Register Page</h2><br />
            <div className={styles.loginForm}>
                <form method="post" onSubmit={onSubmit} >
                    <label htmlFor='email'>Email</label>
                    <input type="email" id='email' name="email" className={styles.Uname} placeholder="Email" value={values.email} onChange={changeHandler} />
                    <br /><br />
                    <label htmlFor='password'>Password</label>
                    <input type="password" id='password' name="password" className={styles.Pass} placeholder="Password" value={values.password} onChange={changeHandler} data-testid="password-input"/>
                    <br /><br />
                    <label htmlFor='confirmPassword'>Confirm Password</label>
                    <input type="password" id='confirmPassword' name="confirmPassword" className={styles.Pass} placeholder="Password" value={values.confirmPassword} onChange={changeHandler} />
                    <br /><br />
                    <input type="submit" name="log" className={styles.log} value="Register Here" />
                    <br /><br />
                </form>
            </div>
        </div>

    )
}