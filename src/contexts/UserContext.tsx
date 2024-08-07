import { createContext, ReactNode, useState } from "react"

export interface AddressStateType {
  cep: string,
  rua: string,
  numero: number,
  complemento?: number,
  bairro: string,
  cidade: string,
  uf: string
}

interface UserContextType {
  address: AddressStateType,
  setAddress: React.Dispatch<React.SetStateAction<AddressStateType>>
}

interface UserProviderProps {
  children: ReactNode
}

const defaultUserContextType: UserContextType = {
  address: {
    cep: "",
    rua: "",
    numero: 0,
    complemento: 0,
    bairro: "",
    cidade: "",
    uf: ""
  },
  setAddress: () => {}
}

export const UserContext = createContext<UserContextType>(defaultUserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [address, setAddress] = useState<AddressStateType>({
    cep: "",
    rua: "",
    numero: 0,
    complemento: 0,
    bairro: "",
    cidade: "",
    uf: ""
  })

  return(
    <UserContext.Provider value={{ address, setAddress }}>
      {children}
    </UserContext.Provider>
  )
}