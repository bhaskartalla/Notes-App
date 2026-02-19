import { Navigate } from 'react-router-dom'
import { useAuth } from '@/src/features/auth/hooks/useAuth'

const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth()

  if (isLoading) return null

  if (user) {
    return (
      <Navigate
        to='/'
        replace
      />
    )
  }

  return <>{children}</>
}

export default PublicRoute
