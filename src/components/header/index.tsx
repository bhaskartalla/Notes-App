import { NotesContext } from '@/src/context/NotesContext'
import { logOut } from '@/src/firebaseConfig/auth'
import { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Saving from '../Saving'

const HeaderLayout = () => {
  const { user } = useContext(NotesContext)

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
      <header
        id='header'
        className='header-main'
      >
        <div className='header-title'>
          <span className='logo-emoji'>📝</span>
          <h1>Sticky Notes</h1>
        </div>
        <div className='header-content'>
          <Saving />
          {user && (
            <>
              <div className='user-info'>
                <span className='user-name'>{user.displayName}</span>
                <div className='user-avatar'>
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
                className='logout-btn'
              >
                Logout
              </button>
            </>
          )}
        </div>
      </header>
      <Outlet />
    </>
  )
}

export default HeaderLayout
