import type { NoteDataType } from '@/types'
import { useEffect, useState, type ReactNode } from 'react'
import Spinner from '../icons/Spinner'
import { db } from '../apppwrite/databases'
import { NotesContext } from './NotesContext'

const NotesProvider = ({ children }: { children: ReactNode }) => {
  const [loading, setLoading] = useState(false)
  const [notes, setNotes] = useState<NoteDataType[]>([])
  const [selectedNote, setSelectedNote] = useState<NoteDataType>(null)

  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true)
        const response = await db.notes.listRows()

        setNotes(
          response.rows.map((row) => ({
            $id: row.$id,
            body: row.body,
            colors: row.colors,
            position: row.position,
          }))
        )
      } catch (error) {
        console.log('🚀 ~ init ~ error:', error)
      }
      setLoading(false)
    }
    init()
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
      }}
    >
      {loading ? (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
          }}
        >
          <Spinner size='100' />
        </div>
      ) : (
        children
      )}
    </NotesContext.Provider>
  )
}

export default NotesProvider
