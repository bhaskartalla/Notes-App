import styles from './styles.module.css'

const SignIn = ({ handleSignUpView }: { handleSignUpView: () => void }) => {
  return (
    <div id='loginForm'>
      <div className={styles.form_title}>Welcome Back</div>

      <div className={styles.form_group}>
        <label htmlFor='loginEmail'>Email Address</label>
        <input
          type='email'
          id='loginEmail'
          placeholder='you@example.com'
          required
        />
      </div>

      <div className={styles.form_group}>
        <label htmlFor='loginPassword'>Password</label>
        <input
          type='password'
          id='loginPassword'
          placeholder='••••••••'
          required
        />
      </div>

      <button
        className={styles.submit_btn}
        onClick={() => 'handleLogin()'}
      >
        Sign In
      </button>

      <div className={styles.divider}>
        <div className={styles.divider_text}>OR</div>
      </div>

      <button
        className={styles.google_btn}
        onClick={() => 'handleGoogleSignIn()'}
      >
        <div className={styles.google_icon}>🔍</div>
        Sign in with Google
      </button>

      <div className={styles.toggle_section}>
        Don't have an account?
        <a onClick={handleSignUpView}>Create one</a>
      </div>
    </div>
  )
}

export default SignIn
