import { useForm } from "react-hook-form";
import { AddressStateType, UserContext } from "../../../contexts/UserContext";
import { useContext } from "react";

interface FormAddressProps {
  handleSubmitAddressForm: (data: AddressStateType) => void
}

export function FormAddress({ handleSubmitAddressForm }: FormAddressProps) {
  const { address } = useContext(UserContext)

  const { 
    register,
    handleSubmit,
    formState: { errors }
   } = useForm<AddressStateType>()

  return(
    <form onSubmit={handleSubmit(handleSubmitAddressForm)} className="w-full mt-3 flex flex-col gap-3">   
      <div>
        <input 
          value={address.rua}
          className="p-3 w-full font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark"
          placeholder="Rua"
          {...register("rua", { required: true, maxLength: 40, disabled: true })}
        />
      </div>

      <div className="flex gap-3">
        <div>
          <input 
            className="p-3 w-[200px] max-mobile:w-14 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
            placeholder="Número"
            type="number" 
            min={1}
            {...register("numero", { required: true, maxLength: 5 })}
          />
          {errors.numero?.type === "required" && (
            <p className="text-roboto text-sm text-red-danger" role="alert">campo obrigatório</p>
          )}
          {errors.numero?.type === "maxLength" && (
            <p className="text-roboto text-sm text-red-danger" role="alert">número muito grande!</p>
          )}
          {errors.numero?.type === "valueAsNumber" && (
            <p className="text-roboto text-sm text-red-danger" role="alert">what???</p>
          )}
        </div>
        
        <div className="flex-1">
          <input 
            className="p-3 w-full max-h-[46px] font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
            placeholder="Complemento/Apto"
            {...register("complemento", { maxLength: 40 })}
          />
          {errors.complemento?.type === "maxLength" && (
            <p className="text-roboto text-sm text-red-danger" role="alert">descreva com poucas palavras!</p>
          )}
        </div>
      </div>

      <div className="flex gap-3">
        <input 
          value={address.bairro}
          className="p-3 w-[200px] max-mobile:w-24 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="Bairro"
          {...register("bairro", { required: true, maxLength: 40, disabled: true })}
        />
        <input 
          value={address.cidade}
          className="p-3 flex-1 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="Cidade"
          {...register("cidade", { required: true, maxLength: 40, disabled: true })}
        />
        <input 
          value={address.uf}
          className="p-3 w-[60px] max-mobile:w-12 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="UF"
          type="text"
          {...register("uf", { required: true, maxLength: 2, disabled: true })}
        />
      </div>
      <input
      type="submit" 
      className="mt-8 p-2 bg-purple font-roboto font-bold text-sm text-white rounded-md cursor-pointer hover:bg-purple-dark duration-300" 
      value="CONFIRMAR ENDEREÇO"/>
    </form>
  )
}