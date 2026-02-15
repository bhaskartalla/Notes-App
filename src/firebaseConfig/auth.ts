import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
  type User,
} from 'firebase/auth'
import { auth } from './config'

export const observeAuthState = (
  callback: (user: User | null) => void
): (() => void) => {
  return onAuthStateChanged(auth, callback)
}

// Sign in with Google
export const signInWithGoogle = async () => {
  console.log('🚀 ~ signInWithGoogle ~  :')
  try {
    const provider = new GoogleAuthProvider()
    const result = await signInWithPopup(auth, provider)
    const user = result.user
    console.log('🚀 ~ signInWithGoogle ~ user:', user)

    // Create/update user document in Firestore
    // await createUser(user.uid, {
    //   email: user.email,
    //   displayName: user.displayName || '',
    //   photoURL: user.photoURL || '',
    //   provider: 'google',
    // })

    return user
  } catch (error) {
    console.error('Error signing in with Google:', error)
    throw error
  }
}

// Sign out
export const logOut = async () => {
  try {
    await signOut(auth)
    console.log('User signed out successfully')
  } catch (error) {
    console.error('Error signing out:', error)
    throw error
  }
}
