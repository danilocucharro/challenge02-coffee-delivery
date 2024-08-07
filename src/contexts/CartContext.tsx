import { createContext, ReactNode, useState } from "react";

interface CartStateType {
  coffeeName: string,
  coffeeImgName: string,
  coffeePrice: number,
  coffeeAmount: number
}

interface CartContextType {
  cartItems: CartStateType[],
  setCartItems: React.Dispatch<React.SetStateAction<CartStateType[]>>,
}

interface CartProviderProps {
  children: ReactNode
}

const defaultValueCartContext: CartContextType = {
  cartItems: [],
  setCartItems: () => {},
}

export const CartContext = createContext<CartContextType>(defaultValueCartContext)

export function CartProvider ({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartStateType[]>([])

  return(
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}