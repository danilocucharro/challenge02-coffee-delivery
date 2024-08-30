import { createContext, ReactNode, useEffect, useState } from "react";

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
  
  useEffect(() => {
    const lastCartItems = localStorage.getItem("cart")
    
    if(lastCartItems){
      setCartItems(JSON.parse(lastCartItems))
    }
  }, [])

  useEffect(() => {
    if(cartItems.length > 0) localStorage.setItem("cart", JSON.stringify(cartItems))
      if(cartItems.length < 1) localStorage.removeItem("cart")
  }, [cartItems])

  return(
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  )
}