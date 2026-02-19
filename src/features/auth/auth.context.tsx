import { createContext } from 'react'
import type { User } from 'firebase/auth'
import { useState, useEffect, type ReactNode } from 'react'
import { observeAuthState } from '@/src/lib/firebase/auth'

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  isLoading: true,
})

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = observeAuthState((authUser: User | null) => {
      setUser(authUser)
      setIsLoading(false)
    })

    return () => unsubscribe()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext }
