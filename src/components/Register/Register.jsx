import styles from './myName.module.css'

import { useContext } from "react";
import { Link } from "react-router-dom";

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
            <h2>Register Page</h2><br />
            <div className={styles.loginForm}>
                <form method="post" onSubmit={onSubmit} >
                    <label>Email</label>
                    <input type="email" name="email" className={styles.Uname} placeholder="Email" value={values.email} onChange={changeHandler} />
                    <br /><br />
                    <label>Password</label>
                    <input type="password" name="password" className={styles.Pass} placeholder="Password" value={values.password} onChange={changeHandler} />
                    <br /><br />
                    <label>Confirm Password</label>
                    <input type="password" name="confirmPassword" className={styles.Pass} placeholder="Password" value={values.confirmPassword} onChange={changeHandler} />
                    <br /><br />
                    <input type="submit" name="log" className={styles.log} defaultValue="Register Here" />
                    <br /><br />
                </form>
            </div>
        </div>

    )
}