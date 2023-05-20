import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

import { supabase } from '../lib/supabase'

import { User } from '../types'

type AuthContextProps = {
  user: User | null
  setUser: Dispatch<SetStateAction<User | null>>
  isLogged: boolean
}

export const AuthContext = createContext({} as AuthContextProps)

type AuthProviderProps = {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)

  console.log(supabase.auth)

  const isLogged = !!user

  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        isLogged
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}
