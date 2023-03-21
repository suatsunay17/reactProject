

export const Login = () => {

  return (
      <div>
        <h2>Login Page</h2><br />
        <div className={styles.loginForm}>
          <form method="POST" onSubmit={onSubmit}>
            <label>Email

            </label>
            <input type="email"  className={styles.Uname} placeholder="Email" name={LoginFormKeys.Email} value={values[LoginFormKeys.Email]} onChange={changeHandler}/>
            <br /><br />
            <label>Password

            </label>
            <input type="password"  className={styles.Pass} placeholder="Password" name={LoginFormKeys.Password} value={values[LoginFormKeys.Password]} onChange={changeHandler}/>
            <br /><br />
            <input type="submit" name="log" className={styles.log} value="Log In Here" />
            <br /><br />

          </form>
        </div>
      </div>
  )
}
