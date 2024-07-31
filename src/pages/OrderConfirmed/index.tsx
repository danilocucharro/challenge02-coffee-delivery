import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { Header } from "../../components/Header";
import imgSuccessOrder from "../../assets/illustration.svg"

export function OrderConfirmed() {
  return(
    <div className="bg-background h-lvh">
      <Header />

      <section className="px-40 mt-44">
        <div>
          <h2 className="font-baloo2 font-extrabold text-[32px] text-yellow-dark">Uhu! Pedido Confirmado</h2>
          <p className="font-roboto text-xl text-base-subtitle">Agora é só aguardar que logo o café chegará até você</p>
        </div>

        <div className="flex mt-8 justify-between">
          <div className="bg-gradient-to-br w-[526px] p-[1px] from-yellow to-purple rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
            <div className="flex flex-col w-full h-full p-10 gap-8 bg-background rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px]">
              <div className="flex gap-3 items-center">
                <div className="flex w-10 h-10 bg-purple rounded-full justify-center items-center">
                  <MapPin size={20} weight="fill" color="white" />
                </div>

                <div>
                  <p className="font-roboto text-base-text">Entrega em <span className="font-bold">Rua João Daniel Martinelli, 102</span> <br /> Farrapos - Porto Alegre, RS</p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="flex w-10 h-10 bg-yellow rounded-full justify-center items-center">
                  <Timer size={20} weight="fill" color="white" />
                </div>

                <div>
                  <p className="font-roboto text-base-text">Previsão de entrega <br /> <span className="font-bold">20 min - 30 min</span></p>
                </div>
              </div>

              <div className="flex gap-3 items-center">
                <div className="flex w-10 h-10 bg-yellow-dark rounded-full justify-center items-center">
                  <CurrencyDollar size={20} weight="fill" color="white" />
                </div>

                <div>
                  <p className="font-roboto text-base-text">Pagamento na entrega <br /> <span className="font-bold">Cartão de Crédito</span></p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <img src={imgSuccessOrder} alt="Pedido confirmado com sucesso!" />
          </div>
        </div>
      </section>
    </div>
  )
}