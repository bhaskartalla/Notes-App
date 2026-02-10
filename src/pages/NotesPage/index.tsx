import NoteCard from '@/src/components/NoteCard'
import { useContext } from 'react'
import type { NoteDataType } from '@/types'
import { NotesContext } from '@/src/context/NotesContext'
import Controls from '@/src/components/Controls'

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
