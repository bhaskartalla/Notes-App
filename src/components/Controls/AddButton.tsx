import { useContext, useRef } from 'react'
// import { db } from '../apppwrite/databases'
import colors from '@/src/utils/colors.json'
import { STATUS } from '@/src/utils'
import { NotesContext } from '@/src/context/NotesContext'
import { dbFunctions } from '@/src/firebaseConfig/dbFunctions'
import Plus from '@/src/assets/icons/Plus'
import styles from './styles.module.css'

const AddButton = () => {
  const startingPos = useRef(70)

  const { setNotes, setSelectedNote, setStatus } = useContext(NotesContext)

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
      const response = await dbFunctions.notes.createDocument(payload)
      // const response = await db.notes.createRow(payload)
      setNotes((prev) => [...prev, response])
      setSelectedNote(response)
    } catch (error) {
      console.error('🚀 ~ addNote ~ error:', error)
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
