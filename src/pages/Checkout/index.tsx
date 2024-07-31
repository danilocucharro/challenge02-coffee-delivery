import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";
import { Header } from "../../components/Header";
import { PaymentButton } from "./components/PaymentButton";
import { CartCoffeeCard } from "./components/CartCoffeeCard";

export function Checkout() {
  return(
    <div className="bg-background h-lvh">
      <Header />
      
      <section className="flex px-40 mt-28 gap-8">
      <div className="flex-1 mt-8">
        <h2 className="text-lg font-baloo2 font-bold mb-3">Complete seu pedido</h2>
        <div className="p-10 gap-8 bg-base-card rounded-md">
          <div className="flex w-full gap-2">
            <div>
              <MapPinLine size={24} color="#C47F17" />
            </div>
            <div>
              <h3 className="text-base-subtitle font-roboto text-base">Endereço de Entrega</h3>
              <p className="text-sm font-roboto text-base-text">Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </div>

          <form className="w-full mt-8 flex flex-col gap-3">
            <div>
              <input className="p-3 w-[200px] font-roboto text-sm text-base-title bg-base-card rounded-[4px] border border-base-button focus:border-yellow-dark" type="text" placeholder="CEP" />
            </div>

            <div>
              <input className="p-3 w-full font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" type="text" placeholder="Rua" />
            </div>

            <div className="flex gap-3">
              <input className="p-3 w-[200px] font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" type="number" placeholder="Número" />
              <input className="p-3 flex-1 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" type="number" placeholder="Complemento" />
            </div>

            <div className="flex gap-3">
              <input className="p-3 w-[200px] font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" type="text" placeholder="Bairro" />
              <input className="p-3 flex-1 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" type="text" placeholder="Cidade" />
              <input className="p-3 w-[60px] font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" type="text" placeholder="UF" />
            </div>
          </form>
        </div>

        <div className="flex flex-col p-10 gap-8 mt-3 bg-base-card rounded-md">
          <div className="flex gap-2 w-full">
            <div>
              <CurrencyDollar color="#8047F8" size={24} />
            </div>
            <div>
              <h3 className="text-base font-roboto text-base-subtitle">Pagamento</h3>
              <p className="font-roboto text-sm text-base-text">O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </div>

          <div className="flex justify-between gap-3">
            <PaymentButton 
              paymentMethodValue="credito"
              paymentType="CARTÃO DE CRÉDITO"
            >
              <CreditCard size={16} color="#8047F8"/>
            </PaymentButton>

            <PaymentButton 
              paymentMethodValue="debito"
              paymentType="CARTÃO DE DÉBITO"
            >
              <Bank size={16} color="#8047F8"/>
            </PaymentButton>

            <PaymentButton 
              paymentMethodValue="dinheiro" 
              paymentType="DINHEIRO"
            >
              <Money size={16} color="#8047F8"/>
            </PaymentButton>
          </div>
        </div>
      </div>

        <div className="w-[448px] mt-8">
          <h2 className="text-lg font-baloo2 font-bold mb-3">Cafés selecionados</h2>
          <div className="p-10 bg-base-card rounded-tl-md gap-6 rounded-tr-[44px] rounded-br-md rounded-bl-[44px]">
            <CartCoffeeCard
              name="Espresso tradicional"
              imgName="bg-traditional"
              price={9.90}
              amount={1}
            />

            <div className="h-px w-full bg-base-button my-6" />

            <CartCoffeeCard
              name="Latte"
              imgName="bg-latte"
              price={9.90}
              amount={1}
            />

            <div className="h-px w-full bg-base-button my-6" />

            <div className="flex flex-col gap-3">
              <div className="flex justify-between items-center">
                <span className="font-roboto text-sm text-base-text">Total de itens</span>
                <span className="font-roboto text-base text-base-text">R$ 29,70</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-roboto text-sm text-base-text">Entrega</span>
                <span className="font-roboto text-base text-base-text">R$ 3,50</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="font-roboto font-bold text-xl text-base-subtitle">Total</span>
                <span className="font-roboto font-bold text-xl text-base-subtitle">R$ 33,20</span>
              </div>
            </div>

              <button onClick={() => console.log("go to /checkout/order-confirmed")} className="w-full y-3 p-2 mt-3 bg-yellow items-center justify-center rounded-md hover:bg-yellow-dark duration-200">
                <span className="font-roboto font-bold text-sm text-white">CONFIRMAR PEDIDO</span>
              </button>
          </div>
        </div>
      </section>
    </div>
  )
}