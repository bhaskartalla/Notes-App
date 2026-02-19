import {
  createContext,
  useState,
  type ReactNode,
  type Dispatch,
  type SetStateAction,
} from 'react'

import type { NoteDataType, ToastType } from '@/types'
import { useAuth } from '@/src/features/auth/hooks/useAuth'
import { useRealtimeNotes } from './hooks/useRealtimeNotes'

type NotesContextType = {
  notes: NoteDataType[]
  setNotes: Dispatch<SetStateAction<NoteDataType[] | []>>
  selectedNote: NoteDataType | null
  setSelectedNote: Dispatch<SetStateAction<NoteDataType | null>>
  status: string
  setStatus: Dispatch<SetStateAction<string>>
  toast: ToastType
  setToast: Dispatch<SetStateAction<ToastType>>
}

const NotesContext = createContext<NotesContextType | undefined>(undefined)

export const NotesProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useAuth()

  const { notes, toast, setToast, setNotes, selectedNote, setSelectedNote } =
    useRealtimeNotes(user)

  const [status, setStatus] = useState('')

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        selectedNote,
        setSelectedNote,
        status,
        setStatus,
        toast,
        setToast,
      }}
    >
      {children}
    </NotesContext.Provider>
  )
}

export { NotesContext }
