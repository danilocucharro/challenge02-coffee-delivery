import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

import banner from '../../../assets/coffee-banner.svg'

export function Banner() {
  return(
    <div className="flex mt-36 max-mobile:mt-24 justify-center w-full h-[544px] desktop:bg-banner max-mobile:bg-background max-mobile:px-5 max-mobile:flex-col max-mobile:h-auto">
      <div className="flex px-40 w-[1440px] justify-between max-mobile:w-full max-mobile:px-0">
        <div className="flex flex-col h-2/3 w-1/2 gap-4 max-mobile:w-full">
          <div>
            <h1 className="text-5xl text-nowrap font-baloo2 font-extrabold leading-tight max-mobile:text-4xl max-mobile:text-wrap">Encontre o café perfeito <br /> para qualquer hora do dia</h1>
          </div>

          <p className="font-roboto text-xl text-base-subtitle max-mobile:hidden">Com o Coffee Delivery você recebe seu café onde estiver, a <br />qualquer hora</p>

          <div className="flex gap-12 mt-12 max-mobile:mt-1 max-mobile:gap-2 max-mobile:flex-col">
            <div className="flex flex-col gap-5 max-mobile:gap-2">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-yellow-dark rounded-full">
                  <span>
                    <ShoppingCart weight="fill" color="#FAFAFA"/>
                  </span>
                </div>
                <span className="font-roboto text-nowrap text-base-text max-mobile:text-xs">Compra simples e segura</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-yellow rounded-full">
                  <span>
                    <Timer weight="fill" color="#FAFAFA"/>
                  </span>
                </div>
                <span className="font-roboto text-nowrap text-base-text max-mobile:text-xs">Entrega rápida e rastreada</span>
              </div>
            </div>

            <div className="flex gap-5 flex-col max-mobile:gap-2">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-base-text rounded-full">
                  <span>
                    <Package weight="fill" color="#FAFAFA"/>
                  </span>
                </div>
                <span className="font-roboto text-nowrap text-base text-base-text max-mobile:text-xs">Embalagem mantém o café intacto</span>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="p-2 bg-purple rounded-full">
                  <span>
                    <Coffee weight="fill" color="#FAFAFA"/>
                  </span>
                </div>
                <span className="font-roboto text-nowrap text-base-text max-mobile:text-xs">O café chega fresquinho até você</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-mobile:hidden">
          <img src={banner} alt="banner coffee delivery" />
        </div>
      </div>
    </div>
  )
}