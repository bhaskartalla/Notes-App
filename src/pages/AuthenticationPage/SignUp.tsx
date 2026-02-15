import { signInWithGoogle } from '@/src/firebaseConfig/auth'
import styles from './styles.module.css'

const SignUp = ({ handleSignInView }: { handleSignInView: () => void }) => {
  const handleRegister = () => {}

  const handleGoogleSignUp = () => {
    signInWithGoogle()
  }

  return (
    <div id='registerForm'>
      <div className={styles.form_title}>Create Account</div>

      <div className={styles.form_group}>
        <label htmlFor='registerEmail'>Email Address</label>
        <input
          type='email'
          id='registerEmail'
          placeholder='you@example.com'
          required
        />
      </div>

      <div className={styles.form_group}>
        <label htmlFor='registerPassword'>Password</label>
        <input
          type='password'
          id='registerPassword'
          placeholder='••••••••'
          required
        />
      </div>

      <div className={styles.form_group}>
        <label htmlFor='registerConfirm'>Confirm Password</label>
        <input
          type='password'
          id='registerConfirm'
          placeholder='••••••••'
          required
        />
      </div>

      <button
        className={styles.submit_btn}
        onClick={handleRegister}
      >
        Create Account
      </button>

      <div className={styles.divider}>
        <div className={styles.divider_text}>OR</div>
      </div>

      <button
        className={styles.google_btn}
        onClick={handleGoogleSignUp}
      >
        <div className={styles.google_icon}>🔍</div>
        Sign up with Google
      </button>

      <div className={styles.toggle_section}>
        Already have an account?
        <a onClick={handleSignInView}>Sign in</a>
      </div>
    </div>
  )
}

export default SignUp
