import Trash from '@/src/shared/components/icons/Trash'
import { getToastErrorMessage, STATUS } from '@/src/shared/utils/index'
import { useNotes } from '../hooks/useNotes'
import { useAuth } from '@/src/features/auth/hooks/useAuth'
import { notesService } from '../notes.service'

type DeleteButtonProps = {
  noteId: string
}

const DeleteButton = ({ noteId }: DeleteButtonProps) => {
  const { setNotes, setStatus, setToast, setSelectedNote } = useNotes()
  const { user } = useAuth()

  const handleDelete = async () => {
    try {
      setStatus(STATUS.DELETING)
      await notesService.deleteNote(user?.uid ?? '', noteId)
      setNotes((prev) => {
        const updatedNotes = prev.filter(({ id }) => id !== noteId)
        setSelectedNote(updatedNotes.length ? updatedNotes[0] : null)
        return updatedNotes
      })
    } catch (error) {
      setToast(getToastErrorMessage(error))
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
