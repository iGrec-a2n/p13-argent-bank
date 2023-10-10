import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './Form.module.css'
import {loginSendData} from '../../services/dataManager'
import { getGlobalSate, updateGlobalSate } from '../../utils/Provider'

function Form() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  let validationFlag = false
  let token = getGlobalSate('token') || null
  // token = token ? token : null
  
  function templateForm() {
    if(token)navigate('/')
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
    const isAuth = await loginSendData({
      email: evt.target.elements.email.value,
      password: evt.target.elements.password.value,
    })
    if (isAuth) {
      console.log('in handleSubmit isAuth = true', isAuth)
      token = isAuth.token
      console.log(token);
      updateGlobalSate('token', token)
      return navigate('/profile')
    } else {
      console.log('in handleSubmit isAuth = false')
      const loginForm = document.getElementById('loginSection')
      loginForm.style.animation = ''
      void loginForm.offsetWidth
      loginForm.style.borderColor = 'rgb(200, 10, 10)'
      loginForm.style.animation =
      'shake 0.82s cubic-bezier(.36,.07,.19,.97) both'
      const errorMessage = document.createElement('span')
      if(validationFlag){
        errorMessage.innerText = 'Veuillez verifier les informations de connexion'
        errorMessage.style.color = 'crimson'
        loginForm.appendChild(errorMessage)
        validationFlag = true        
      }else{
        loginForm.parentNode.removeChild(errorMessage)
        validationFlag = false
      }
    }
  }


  return templateForm()
}

export default Form
