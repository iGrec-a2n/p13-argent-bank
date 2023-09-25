// import { useEffect, useState } from 'react'
import { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { login, checkToken } from '../../redux/actions.js'

import styles from './Form.module.css'

/**
 *
 * @component
 */
function Form() {
  // const dispatch = useDispatch()
  // const navigate = useNavigate()
  //@ts-ignore
  // const { app } = useSelector((state) => state)

  // useEffect(() => {
  //   if (!app.isLogged && app.token && !app.loading) {
  //     //@ts-ignore
  //     dispatch(checkToken(app.token))
  //   }
  //   if (app.isLogged && app.token) {
  //     navigate('/profile')
  //   }
  // }, [app.isLogged, app.token, app.loading, navigate, dispatch])

  // function templateLoading() {
  //   return <h1>loading</h1>
  // }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  function templateForm() {
    return (
      <form onSubmit={(e) => handleSubmit(e)} id="loginForm">
        <div className={styles.inputWrapper}>
          <label>Username / email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className={styles.inputWrapper}>
          <label>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.inputRemember}>
          <input type="checkbox" id="remember-me" checked disabled />
          <label>Remember me</label>
        </div>
        <button type="submit" className={styles.signInButton}>
          Sign In
        </button>
      </form>
    )
  }

  async function handleSubmit(evt) {
    evt.preventDefault()
    // dispatch(
    //   //@ts-ignore
    //   login({
    //     email: email,
    //     password: password,
    //   })
    // )
  }

  return templateForm()
  // return app.loading ? templateLoading() : templateForm()
}

export default Form
