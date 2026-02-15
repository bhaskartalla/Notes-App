import NotesPage from './pages/NotesPage'
import NotesProvider from './context/NotesProvider'
import AuthenticationPage from './pages/AuthenticationPage'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom'
import ProtectedRoute from './components/routing/ProtectedRoute'
import PublicRoute from './components/routing/PublicRoute'
import HeaderLayout from './components/header'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path='/'
      element={<HeaderLayout />}
    >
      <Route
        index
        element={
          <ProtectedRoute>
            <NotesPage />
          </ProtectedRoute>
        }
      />
      <Route
        path='/signin'
        element={
          <PublicRoute>
            <AuthenticationPage />
          </PublicRoute>
        }
      />
    </Route>
  )
)

function App() {
  return (
    <NotesProvider>
      <RouterProvider router={router} />
    </NotesProvider>
  )
}

export default App
