import type { ColorType } from '@/types'
import { useContext } from 'react'
import { NotesContext } from '../context/NotesContext'
import { db } from '../apppwrite/databases'

const Color = ({ color }: { color: ColorType }) => {
  const { selectedNote, setNotes } = useContext(NotesContext)

  const changeColor = async () => {
    if (selectedNote === null) return
    try {
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
      await db.notes.updateRow(selectedNote.$id, payload)
    } catch (error) {
      console.error('🚀 ~ saveData ~ error:', error)
    }
  }

  return (
    <div
      className='color'
      onClick={changeColor}
      style={{ backgroundColor: color.colorBody }}
    ></div>
  )
}

export default Color
