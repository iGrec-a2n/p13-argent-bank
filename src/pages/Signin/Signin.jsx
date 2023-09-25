import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Form from '../../components/Form/Form'
// import { useContext } from 'react'
// import { ProfileContext } from '../../utils/context'
import styles from './Signin.module.css'

/**
 * React component for the Login page
 * @component
 */
function Signin() {
  // const [store, updateStore] = useContext(ProfileContext)

  return (
    <div className="body">
      <Header />
      <main className="main bg-dark">
        <section className={styles.signInContent} id="loginSection">
          <div className={styles.signInIcon}>
          <i className="fa fa-user-circle signInIcon"></i>
          
          </div>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Signin
