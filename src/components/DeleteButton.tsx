// import { db } from '../apppwrite/databases'
import { useContext } from 'react'
import Trash from '@/src/assets/icons/Trash'
import { NotesContext } from '@/src/context/NotesContext'
import { STATUS } from '@/src/utils'
import { dbFunctions } from '@/src/firebaseConfig/dbFunctions'

type DeleteButtonProps = {
  noteId: string
}

const DeleteButton = ({ noteId }: DeleteButtonProps) => {
  const { setNotes, setStatus } = useContext(NotesContext)

  const handleDelete = async () => {
    try {
      setStatus(STATUS.DELETING)
      await dbFunctions.notes.deleteDocument(noteId)
      // await db.notes.deleteRow(noteId)
      setNotes((prev) => prev.filter(({ $id }) => $id !== noteId))
    } catch (error) {
      console.error('🚀 ~ handleDelete ~ error:', error)
    }
    setStatus('')
  }

  return (
    <div onClick={handleDelete}>
      <Trash />
    </div>
  )
}
export default DeleteButton
