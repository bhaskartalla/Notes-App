import { useRef } from 'react'
import colors from '@/src/shared/utils/colors.json'
import { getToastErrorMessage, STATUS } from '@/src/shared/utils/index'
import Plus from '@/src/shared/components/icons/Plus'
import styles from './Notes.module.css'
import { useNotes } from '../hooks/useNotes'
import { useAuth } from '@/src/features/auth/hooks/useAuth'
import { notesService } from '../notes.service'

const AddButton = () => {
  const startingPos = useRef(70)

  const { setNotes, setSelectedNote, setStatus, setToast } = useNotes()
  const { user } = useAuth()

  const addNote = async () => {
    setStatus(STATUS.CREATING)

    try {
      const payload = {
        body: '',
        position: JSON.stringify({
          x: startingPos.current,
          y: startingPos.current,
        }),
        colors: JSON.stringify(colors[0]),
      }
      startingPos.current += 10
      const response = await notesService.createNote(user?.uid ?? '', payload)
      setNotes((prev) => [...prev, response])
      setSelectedNote(response)
    } catch (error) {
      setToast(getToastErrorMessage(error))
    }
    setStatus('')
  }

  return (
    <div
      className={styles.add_btn}
      onClick={addNote}
    >
      <Plus />
    </div>
  )
}
export default AddButton
