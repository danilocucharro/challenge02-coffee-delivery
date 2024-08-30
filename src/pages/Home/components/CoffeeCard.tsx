import { Minus, Plus, ShoppingCart } from "phosphor-react";
import { useContext, useState } from "react";
import { CartContext } from "../../../contexts/CartContext";
import { toast } from "sonner";

interface CoffeeCardProps {
  imgName: string,
  tag: string[],
  name: string,
  description: string,
  price: number,
  amount: number
}

export function CoffeeCard({ 
  imgName,
  tag,
  name,
  description,
  price
 }: CoffeeCardProps) {
  const [amount, setAmount] = useState(1)
  const { cartItems, setCartItems } = useContext(CartContext)

  function handleAddMoreCoffee() {
    if (amount > 0 && amount < 5)
    setAmount(amount + 1)
  }

  function handleDecreaseCoffee() {
    if(amount > 1)
    setAmount(amount - 1)
  }

  function handleAddCartItem () {
    const cartItem = cartItems.findIndex((item) => item.coffeeName === name)

    if(cartItem < 0){
      const newCartItem = {
        coffeeName: name,
        coffeeImgName: imgName,
        coffeePrice: price,
        coffeeAmount: amount
      }

      setCartItems([...cartItems, newCartItem])

      toast.success("Item adicionado ao seu carrinho!")
    } else {
      const itemCart = cartItems.find((item) => item.coffeeName === name)

      itemCart!.coffeeAmount += amount
      localStorage.setItem("cart", JSON.stringify(cartItems))

      toast.success("Item adicionado ao seu carrinho!")
    }
  }

  return(
    <div className={`flex flex-col gap-3 items-center w-64 h-80 bg-base-card rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]`}>
      <svg className={`mt-[-1rem] ${imgName} w-[120px] h-[120px]`}/>

      <div className="flex text-yellow-dark">
        {tag.map((tag) => (
          <span key={tag} className="bg-yellow-light text-[10px] font-bold font-roboto rounded-full px-2 py-1">{tag}</span>
        ))}
      </div>

      <div className="flex flex-col gap-8 px-5">
        <div className="flex flex-col gap-1 items-center">
          <h3 className="text-xl font-baloo2 font-bold text-base-subtitle">{name}</h3>
          <p className="text-sm font-roboto text-center text-base-label">{description}</p>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex h-10 justify-center text-base-text text-xs items-center">
            <div>
              R$ <span className="text-2xl text-base-text font-baloo2 font-bold">{(price).toFixed(2).toString().replace(".", ",")}</span>
            </div>
          </div>

          <div className="flex h-10 gap-2">
            <div className="flex bg-base-button w-[72px] p-2 justify-between items-center rounded-md">
              <button onClick={handleDecreaseCoffee} className="text-purple text-lg font-roboto hover:text-purple-dark">
                <Minus />
              </button>
                <span className="text-base-title font-roboto text-base">{amount}</span>
              <button onClick={handleAddMoreCoffee} className="text-purple text-lg font-roboto hover:text-purple-dark">
                <Plus />
              </button>
            </div>

            <button onClick={handleAddCartItem} className="h-full w-10 flex justify-center items-center bg-purple-dark rounded-md hover:bg-purple duration-150">
              <ShoppingCart size={24} weight="fill" color="#F3F2F2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}