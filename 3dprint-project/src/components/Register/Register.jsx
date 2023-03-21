

export const Register = () => {

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