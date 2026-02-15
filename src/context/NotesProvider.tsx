import type { NoteDataType } from '@/types'
import { useEffect, useState, type ReactNode } from 'react'
import Spinner from '@/src/assets/icons/Spinner'
import { NotesContext } from './NotesContext'
import { observeAuthState } from '../firebaseConfig/auth'
import type { User } from 'firebase/auth'

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(true)
  const [notes, setNotes] = useState<NoteDataType[]>([])
  const [selectedNote, setSelectedNote] = useState<NoteDataType>(null)
  const [status, setStatus] = useState('')
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    const unsubscribe = observeAuthState((user: User | null) => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        loading,
        setLoading,
        selectedNote,
        setSelectedNote,
        status,
        setStatus,
        user,
      }}
    >
      <div id='app'>
        {loading && (
          <div className='main-spinner'>
            <Spinner size='100' />
          </div>
        )}
        {children}
      </div>
    </NotesContext.Provider>
  )
}

export default NotesProvider
