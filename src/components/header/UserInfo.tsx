import type { User } from 'firebase/auth'
import styles from './styles.module.css'
import { logOut } from '@/src/firebaseConfig/auth'

const UserInfo = ({ user }: { user: User }) => {
  const handleLogout = async () => {
    try {
      await logOut()
      console.log('User signed out successfully')
    } catch (error) {
      console.error('Error signing out:', error)
    }
  }

  return (
    <>
      <div className={styles.user_info}>
        <span className={styles.user_name}>{user.displayName}</span>
        <div className={styles.user_avatar}>
          {user.photoURL ? (
            <img
              src={user.photoURL || 'https://via.placeholder.com/32'}
              alt='User Profile'
              referrerPolicy='no-referrer'
              loading='lazy'
            />
          ) : (
            <span>
              {(user.displayName ?? '')
                .split(' ')
                .map((name: string) => name[0].toUpperCase())
                .join('')}
            </span>
          )}
        </div>
      </div>
      <button
        onClick={handleLogout}
        className={styles.logout_btn}
      >
        Logout
      </button>
    </>
  )
}
export default UserInfo
