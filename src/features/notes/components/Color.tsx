import type { ColorType } from '@/types'
import styles from './Notes.module.css'
import { getToastErrorMessage, STATUS } from '@/src/shared/utils'
import { useNotes } from '../hooks/useNotes'
import { useAuth } from '@/src/features/auth/hooks/useAuth'
import { notesService } from '../notes.service'

const Color = ({ color }: { color: ColorType }) => {
  const { selectedNote, setNotes, setStatus, setToast } = useNotes()

  const { user } = useAuth()

  const changeColor = async () => {
    if (selectedNote === null) return
    try {
      setStatus(STATUS.SAVING)
      const payload = { colors: JSON.stringify(color) }
      await notesService.updateNote(user?.uid ?? '', selectedNote.id, payload)
      setNotes((prev) => {
        const curretIndex = prev.findIndex(
          (note) => note.id === selectedNote.id
        )
        const updatedNote = {
          ...prev[curretIndex],
          colors: color,
        }

        const notes = [...prev]
        notes[curretIndex] = updatedNote
        return notes
      })
    } catch (error) {
      setToast(getToastErrorMessage(error))
    }
    setStatus('')
  }

  return (
    <div
      className={styles.color}
      onClick={changeColor}
      style={{ backgroundColor: color.colorBody }}
    ></div>
  )
}

export default Color
