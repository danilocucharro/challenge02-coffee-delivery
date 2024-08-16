import { createContext, ReactNode, useState } from "react"

export interface AddressStateType {
  rua: string,
  numero?: number,
  complemento?: string,
  bairro: string,
  cidade: string,
  uf: string
}

interface UserContextType {
  address: AddressStateType,
  setAddress: React.Dispatch<React.SetStateAction<AddressStateType>>,
  isAddressSubmited: boolean,
  setIsAddressSubmited: React.Dispatch<React.SetStateAction<boolean>>
}

interface UserProviderProps {
  children: ReactNode
}

const defaultUserContextType: UserContextType = {
  address: {
    rua: "",
    numero: 0,
    complemento: "",
    bairro: "",
    cidade: "",
    uf: ""
  },
  setAddress: () => {},
  isAddressSubmited: false,
  setIsAddressSubmited: () => {}
}

export const UserContext = createContext<UserContextType>(defaultUserContextType)

export function UserProvider({ children }: UserProviderProps) {
  const [address, setAddress] = useState<AddressStateType>({
    rua: "",
    numero: 0,
    complemento: "",
    bairro: "",
    cidade: "",
    uf: ""
  })
  const [isAddressSubmited, setIsAddressSubmited] = useState(false)

  return(
    <UserContext.Provider value={{ 
      address, 
      setAddress, 
      isAddressSubmited, 
      setIsAddressSubmited 
    }}>
      {children}
    </UserContext.Provider>
  )
}