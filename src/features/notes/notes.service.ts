import {
  createNote,
  updateNote,
  deleteNote,
  getUserNotes,
  createMultipleNotes,
} from '@/src/lib/firebase'
import type { NoteDataType } from '@/types'

export const notesService = {
  async createNote(userId: string, noteData: Partial<NoteDataType>) {
    return await createNote(userId, noteData)
  },

  async updateNote(
    userId: string,
    noteId: string,
    updates: Partial<NoteDataType>
  ) {
    return await updateNote(userId, noteId, updates)
  },

  async updateNotePosition(userId: string, noteId: string, position: string) {
    return await updateNote(userId, noteId, { position })
  },

  async updateNoteBody(userId: string, noteId: string, body: string) {
    return await updateNote(userId, noteId, { body })
  },

  async deleteNote(userId: string, noteId: string) {
    return await deleteNote(userId, noteId)
  },

  async getUserNotes(userId: string) {
    return await getUserNotes(userId)
  },

  async createMultipleNotes(
    userId: string,
    notesArray: Partial<NoteDataType>[]
  ) {
    return await createMultipleNotes(userId, notesArray)
  },
}
