import { signInWithGoogle } from '@/src/firebaseConfig/auth'
import { useState } from 'react'

const SignIn = ({ handleSignUpView }: { handleSignUpView: () => void }) => {
  return (
    <div id='loginForm'>
      <div className='form-title'>Welcome Back</div>

      <div className='form-group'>
        <label htmlFor='loginEmail'>Email Address</label>
        <input
          type='email'
          id='loginEmail'
          placeholder='you@example.com'
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='loginPassword'>Password</label>
        <input
          type='password'
          id='loginPassword'
          placeholder='••••••••'
          required
        />
      </div>

      <button
        className='submit-btn'
        onClick={() => 'handleLogin()'}
      >
        Sign In
      </button>

      <div className='divider'>
        <div className='divider-text'>OR</div>
      </div>

      <button
        className='google-btn'
        onClick={() => 'handleGoogleSignIn()'}
      >
        <div className='google-icon'>🔍</div>
        Sign in with Google
      </button>

      <div className='toggle-section'>
        Don't have an account?
        <a onClick={handleSignUpView}>Create one</a>
      </div>
    </div>
  )
}

const SignUp = ({ handleSignInView }: { handleSignInView: () => void }) => {
  const handleRegister = () => {}

  const handleGoogleSignUp = () => {
    signInWithGoogle()
  }

  return (
    <div id='registerForm'>
      <div className='form-title'>Create Account</div>

      <div className='form-group'>
        <label htmlFor='registerEmail'>Email Address</label>
        <input
          type='email'
          id='registerEmail'
          placeholder='you@example.com'
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='registerPassword'>Password</label>
        <input
          type='password'
          id='registerPassword'
          placeholder='••••••••'
          required
        />
      </div>

      <div className='form-group'>
        <label htmlFor='registerConfirm'>Confirm Password</label>
        <input
          type='password'
          id='registerConfirm'
          placeholder='••••••••'
          required
        />
      </div>

      <button
        className='submit-btn'
        onClick={handleRegister}
      >
        Create Account
      </button>

      <div className='divider'>
        <div className='divider-text'>OR</div>
      </div>

      <button
        className='google-btn'
        onClick={handleGoogleSignUp}
      >
        <div className='google-icon'>🔍</div>
        Sign up with Google
      </button>

      <div className='toggle-section'>
        Already have an account?
        <a onClick={handleSignInView}>Sign in</a>
      </div>
    </div>
  )
}

const AuthenticationPage = () => {
  const [isSignInView, setIsSignInView] = useState(true)

  return (
    <div className='auth-container'>
      <div className='auth-card'>
        <div className='auth-header'>
          <h1>📝 Notes App</h1>
          <p>Keep your thoughts organized</p>
        </div>

        <div className='auth-body'>
          <div
            id='errorMessage'
            className='error-message'
          ></div>

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
