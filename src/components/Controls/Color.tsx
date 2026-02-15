import type { ColorType } from '@/types'
import { useContext } from 'react'
// import { db } from '../apppwrite/databases'
import styles from './styles.module.css'
import { NotesContext } from '@/src/context/NotesContext'
import { STATUS } from '@/src/utils'
import { dbFunctions } from '@/src/firebaseConfig/dbFunctions'

const Color = ({ color }: { color: ColorType }) => {
  const { selectedNote, setNotes, setStatus } = useContext(NotesContext)

  const changeColor = async () => {
    if (selectedNote === null) return
    try {
      setStatus(STATUS.SAVING)
      const payload = { colors: JSON.stringify(color) }
      setNotes((prev) => {
        const curretIndex = prev.findIndex(
          (note) => note.$id === selectedNote.$id
        )
        const updatedNote = {
          ...prev[curretIndex],
          colors: color,
        }

        const notes = [...prev]
        notes[curretIndex] = updatedNote
        return notes
      })
      await dbFunctions.notes.updateDocument(selectedNote.$id, payload)
      // await db.notes.updateRow(selectedNote.$id, payload)
    } catch (error) {
      console.error('🚀 ~ saveData ~ error:', error)
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
