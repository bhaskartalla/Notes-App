import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { AuthProvider } from '@/src/features/auth/auth.context'
import { NotesProvider } from '@/src/features/notes/notes.context'
import { Suspense } from 'react'
import Spinner from '@/src/shared/components/Spinner'

function App() {
  return (
    <AuthProvider>
      <NotesProvider>
        <Suspense fallback={<Spinner />}>
          <div id='app'>
            <RouterProvider router={router} />
          </div>
        </Suspense>
      </NotesProvider>
    </AuthProvider>
  )
}

export default App
