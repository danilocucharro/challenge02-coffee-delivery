import { Header } from "../../components/Header";

import banner from '../../assets/banner.png'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
  return(
    <>
      <Header />
      
      <main className="px-40 mt-28 h-lvh bg-background">
        <div className="flex items-center justify-between w-full h-[544px]">
          <div className="flex flex-col h-2/3 w-1/2 gap-4">
            <div>
              <h1 className="text-5xl text-nowrap font-baloo2 font-extrabold leading-tight">Encontre o café perfeito <br />para qualquer hora do dia</h1>
            </div>

            <p className="font-roboto text-xl text-base-subtitle">Com o Coffee Delivery você recebe seu café onde estiver, a <br />qualquer hora</p>

            <div className="flex justify-between mt-12">
              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-yellow-dark rounded-full">
                    <span>
                      <ShoppingCart weight="fill" color="#FAFAFA"/>
                    </span>
                  </div>
                  <span className="font-roboto text-nowrap text-base-text">Compra simples e segura</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-yellow rounded-full">
                    <span>
                      <Timer weight="fill" color="#FAFAFA"/>
                    </span>
                  </div>
                  <span className="font-roboto text-nowrap text-base-text">Entrega rápida e rastreada</span>
                </div>
              </div>

              <div className="flex gap-5 flex-col">
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-base-text rounded-full">
                    <span>
                      <Package weight="fill" color="#FAFAFA"/>
                    </span>
                  </div>
                  <span className="font-roboto text-nowrap text-base text-base-text">Embalagem mantém o café intacto</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <div className="p-2 bg-purple rounded-full">
                    <span>
                      <Coffee weight="fill" color="#FAFAFA"/>
                    </span>
                  </div>
                  <span className="font-roboto text-nowrap text-base-text">O café chega fresquinho até você</span>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={banner} alt="banner coffee delivery" />
          </div>
        </div>

        <div className="mt-10 bg-background">
          <h2 className="font-extrabold text-3xl font-baloo2 mb-14">Nossos cafés</h2>

          <div className="grid grid-cols-4 bg-purple-dark w-full h-5">

          </div>
        </div>
      </main>
    </>
  )
}