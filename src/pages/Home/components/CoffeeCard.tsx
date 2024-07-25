import traditional from "../../../assets/traditional.png";
import { Minus, Plus, ShoppingCart } from "phosphor-react";

export function CoffeeCard() {
  return(
    <div className="flex flex-col items-center w-64 h-auto bg-base-card rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
      <img src={traditional} alt="coffe image" className="mt-[-1rem]"/>

      <div className="flex text-yellow-dark gap-1 mt-3">
        <span className="bg-yellow-light text-[10px] font-bold font-roboto rounded-full px-2 py-1">Traditional</span>
        <span className="bg-yellow-light text-[10px] font-bold font-roboto rounded-full px-2 py-1">Preto</span>
      </div>

      <div className="flex flex-col mt-3 gap-3 px-6 items-center">
        <h3 className="text-xl font-baloo2 font-bold text-base-subtitle">Expresso Tradicional</h3>
        <p className="text-sm font-roboto text-center text-base-label">O tradicional café feito com água quente e grãos moídos</p>
      </div>

      <div className="flex mt-8 mb-5 w-full px-6 justify-between">
        <div className="flex h-10 justify-center text-base-text text-xs items-center">
            <div>
              R$ <span className="text-2xl text-base-text font-baloo2 font-bold">9,90</span>
            </div>
        </div>

        <div className="flex h-10 gap-2">
          <div className="flex bg-base-button w-[72px] p-2 justify-between items-center rounded-md">
            <button className="text-purple text-lg font-roboto">
              <Minus />
            </button>
              <span className="text-base-title font-roboto text-base">1</span>
            <button className="text-purple">
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