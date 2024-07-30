import { Minus, Plus, ShoppingCart } from "phosphor-react";

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
  price,
  amount
 }: CoffeeCardProps) {
  return(
    <div className={`flex flex-col items-center w-64 h-auto bg-base-card rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]`}>
      <svg className={`mt-[-1rem] ${imgName} w-[120px] h-[120px]`}/>

      <div className="flex text-yellow-dark gap-1 mt-3">
        {tag.map((tag) => (
          <span key={tag} className="bg-yellow-light text-[10px] font-bold font-roboto rounded-full px-2 py-1">{tag}</span>
        ))}
      </div>

      <div className="flex flex-col mt-3 gap-3 px-6 items-center">
        <h3 className="text-xl font-baloo2 font-bold text-base-subtitle">{name}</h3>
        <p className="text-sm font-roboto text-center text-base-label">{description}</p>
      </div>

      <div className="flex mt-8 mb-5 w-full px-6 justify-between">
        <div className="flex h-10 justify-center text-base-text text-xs items-center">
            <div>
              R$ <span className="text-2xl text-base-text font-baloo2 font-bold">{(price).toFixed(2).toString().replace(".", ",")}</span>
            </div>
        </div>

        <div className="flex h-10 gap-2">
          <div className="flex bg-base-button w-[72px] p-2 justify-between items-center rounded-md">
            <button className="text-purple text-lg font-roboto hover:text-purple-dark">
              <Minus />
            </button>
              <span className="text-base-title font-roboto text-base">{amount}</span>
            <button className="text-purple text-lg font-roboto hover:text-purple-dark">
              <Plus />
            </button>
          </div>

          <button className="h-full w-10 flex justify-center items-center bg-purple-dark rounded-md hover:bg-purple">
            <ShoppingCart size={24} weight="fill" color="#F3F2F2" />
          </button>
        </div>
      </div>
    </div>
  )
}