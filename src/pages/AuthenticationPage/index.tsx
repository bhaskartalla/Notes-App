import { useState } from 'react'
import SignIn from './SignIn'
import SignUp from './SignUp'
import styles from './styles.module.css'

const AuthenticationPage = () => {
  const [isSignInView, setIsSignInView] = useState(true)
  return (
    <div className={styles.auth_container}>
      <div className={styles.auth_card}>
        <div className={styles.auth_header}>
          <h1>📝 Notes App</h1>
          <p>Keep your thoughts organized</p>
        </div>

        <div className={styles.auth_body}>
          {isSignInView ? (
            <SignIn handleSignUpView={() => setIsSignInView(false)} />
          ) : (
            <SignUp handleSignInView={() => setIsSignInView(true)} />
          )}
        </div>
      </div>
    </div>
  )
}
export default AuthenticationPage
