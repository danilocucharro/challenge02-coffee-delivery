import { Minus, Plus, Trash } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { toast } from "sonner";

interface CartCoffeeCardProps {
  name: string,
  imgName: string,
  price: number,
  coffeeAmount: number,
}

export function CartCoffeeCard({ 
  name, 
  imgName, 
  price, 
  coffeeAmount,
}: CartCoffeeCardProps) {
  const { cartItems, setCartItems } = useContext(CartContext)
  const [amount, setAmount] = useState(coffeeAmount)

  const handleRemoveCartItem = (coffeeName : string) => {
    const newCartItems = cartItems.filter((item) => item.coffeeName != coffeeName)

    setCartItems(newCartItems)
    toast.error("Item removido do carrinho!")
  }

  const handleAddMoreCoffee = (coffeeAmount: number) => {
    setAmount(coffeeAmount + 1)
  }

  const handleDecreaseCoffee = (coffeeAmount: number) => {
    if(amount > 1){
      setAmount(coffeeAmount - 1)
    } else {
      handleRemoveCartItem(name)
    }
  }

  return(
    <div className="flex gap-5 px-1 py-2 items-center">
      <div>
        <svg className={`${imgName} w-16 h-16 bg-cover`}/>
      </div>

      <div className="flex-1">
        <div className="flex justify-between">
          <span className="font-roboto text-base text-base-subtitle leading-9 max-mobile:text-xs">{name}</span>
          <span className="font-roboto font-bold text-base-text leading-9 max-mobile:text-xs">R$ {(price).toFixed(2).toString().replace(".", ",")}</span>
        </div>

        <div className="flex gap-2">
          <div className="flex bg-base-button gap-2 text-base-title px-2 py-1 justify-between items-center rounded-md">
            <button onClick={() => handleDecreaseCoffee(amount)} className="text-purple text-lg font-roboto hover:text-purple-dark">
              <Minus />
            </button>
              <span className="text-base-title font-roboto text-base">{amount}</span>
            <button onClick={() => handleAddMoreCoffee(amount)} className="text-purple text-lg font-roboto hover:text-purple-dark">
              <Plus />
            </button>
          </div>

          <button onClick={() => handleRemoveCartItem(name)} className="flex bg-base-button items-center justify-center px-2 py-1 gap-1 rounded-md hover:bg-base-hover duration-200">
            <Trash color="#8047F8" size={18} />
            <span className="text-base-text font-roboto text-[10px]">REMOVER</span>
          </button>
        </div>
      </div>
    </div>
  )
}