import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money, SmileyXEyes } from "phosphor-react";
import { Header } from "../../components/Header";
import { PaymentButton } from "./components/PaymentButton";
import { CartCoffeeCard } from "./components/CartCoffeeCard";
import { SubmitHandler } from "react-hook-form";
import { useContext, useState } from "react";
import { FormAddress } from "./components/FormAddress";
import { CartContext } from "../../contexts/CartContext";
import { AddressStateType, UserContext } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState<string>("")
  const [isAddressSubmited, setIsAddressSubmited] = useState(false)
  const navigate = useNavigate()

  const { cartItems } = useContext(CartContext)
  const { address, setAddress } = useContext(UserContext)

  const isCepNull = address.cep === "" || address.cep === null

  const onSubmit: SubmitHandler<AddressStateType> = (data) => {
    setAddress({
      cep: data.cep,
      rua: data.rua,
      numero: data.numero,
      complemento: data.complemento,
      bairro: data.bairro,
      cidade: data.cidade,
      uf: data.uf
    })

    setIsAddressSubmited(!isAddressSubmited)
    console.log(isAddressSubmited)
  }

  const handleSetPaymentMethod = (paymentType: string) => {
    setPaymentMethod(paymentType)
  }

  const handleEditAddress = () => {
    setIsAddressSubmited(!isAddressSubmited)
  }

  const handleSubmitOrder = () => {
    if(isCepNull === true){
      alert("Antes de prosseguir, confirme o seu endereço!")
    }
    else if(paymentMethod === ""){
      alert("Antes de prosseguir, escolha um método de pagamento!")
    }
    else if(cartItems.length === 0){
      alert("Não consegui encontrar nada no seu carrinho :(")
    }
    else{
      navigate("/checkout/order-confirmed")
    }
  }

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
              {isCepNull === true
                ? <p className="text-sm font-roboto text-base-text">Informe o endereço onde deseja receber seu pedido</p>
                : null
              }
            </div>
          </div>

          {isCepNull === true
          ? <FormAddress handleSubmitAddressForm={onSubmit} />
          : (
              <div>
                <div className="mt-8 ml-5">
                  <ul className="list-disc">
                    <li>CEP: {address.cep}</li>
                    <li>Rua: {address.rua}</li>
                    <li>Número: {address.numero}</li>
                    <li>Complemento: {address.complemento}</li>
                    <li>Bairro: {address.bairro}</li>
                    <li>Cidade: {address.cidade}</li>
                    <li>UF: {address.uf.toUpperCase()}</li>
                  </ul>
                </div>

                <input onClick={handleEditAddress} className="mt-8 w-full p-2 bg-purple font-roboto font-bold text-sm text-white rounded-md cursor-pointer hover:bg-purple-dark duration-200" type="button" value="EDITAR ENDEREÇO" />
              </div>
            )
          }
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
              onChecked={handleSetPaymentMethod}
            >
              <CreditCard size={16} color="#8047F8"/>
            </PaymentButton>

            <PaymentButton 
              paymentMethodValue="debito"
              paymentType="CARTÃO DE DÉBITO"
              onChecked={handleSetPaymentMethod}
            >
              <Bank size={16} color="#8047F8"/>
            </PaymentButton>

            <PaymentButton 
              paymentMethodValue="dinheiro" 
              paymentType="DINHEIRO"
              onChecked={handleSetPaymentMethod}
            >
              <Money size={16} color="#8047F8"/>
            </PaymentButton>
          </div>
        </div>
      </div>

        <div className="w-[448px] mt-8">
          <h2 className="text-lg font-baloo2 font-bold mb-3">Cafés selecionados</h2>
          <div className="p-10 bg-base-card rounded-tl-md gap-6 rounded-tr-[44px] rounded-br-md rounded-bl-[44px]">
            {cartItems.length === 0 ? (
              <div className="flex flex-col text-center items-center justify-center">
                <SmileyXEyes color="#574f4d" size={64} weight="fill" />
                <h2 className="font-baloo2 font-bold text-lg text-base-text">Por enquanto o seu carrinho está <br /> vazio.</h2>
              </div>
            ) : (
              <div>
                {cartItems.map((item) => (
                  <div key={item.coffeeName}>
                    <CartCoffeeCard
                      name={item.coffeeName}
                      imgName={item.coffeeImgName}
                      price={item.coffeePrice}
                      amount={item.coffeeAmount}
                    />
    
                    <div className="h-px w-full bg-base-button my-6" />
                  </div>
                ))}
    
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
    
                <button onClick={handleSubmitOrder} className="w-full y-3 p-2 mt-3 bg-yellow items-center justify-center disabled:cursor-not-allowed disabled:bg-yellow-light rounded-md hover:bg-yellow-dark duration-200">
                  <span className="font-roboto font-bold text-sm text-white">CONFIRMAR PEDIDO</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}