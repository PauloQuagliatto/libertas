import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState
} from 'react'

type SideMenuContextProps = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const SideMenuContext = createContext({} as SideMenuContextProps)

type SideMenuProviderProps = {
  children: ReactNode
}

export function SideMenuProvider({ children }: SideMenuProviderProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <SideMenuContext.Provider
      value={{
        isOpen,
        setIsOpen
      }}
    >
      {children}
    </SideMenuContext.Provider>
  )
}
