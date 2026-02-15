import { lazy, useContext } from 'react'
import type { NoteDataType } from '@/types'
import { NotesContext } from '@/src/context/NotesContext'
import Controls from '@/src/components/controls'

const NoteCard = lazy(() => import('./NoteCard'))

const NotesPage = () => {
  const { notes } = useContext(NotesContext)

  return (
    <div>
      {notes.map((note: NoteDataType) => (
        <NoteCard
          key={note.$id}
          note={note}
        />
      ))}
      <Controls />
    </div>
  )
}

export default NotesPage
