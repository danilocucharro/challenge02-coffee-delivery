import { useForm } from "react-hook-form";
import { AddressStateType } from "../../../contexts/UserContext";

interface FormAddressProps {
  handleSubmitAddressForm: (data: AddressStateType) => void
}

export function FormAddress({ handleSubmitAddressForm }: FormAddressProps) {

  const { 
    register,
    handleSubmit,
    formState: { errors }
   } = useForm<AddressStateType>()

  return(
    <form onSubmit={handleSubmit(handleSubmitAddressForm)} className="w-full mt-8 flex flex-col gap-3">
      <div>
        <input 
          className="p-3 w-[200px] font-roboto text-sm text-base-title bg-base-card rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="CEP"
          type="number"
          {...register("cep", { required: true, min: 0, minLength: 8, maxLength: 8 })}
        />
        {errors.cep?.type === "required" && (
          <p className="text-roboto text-sm text-red-danger" role="alert">O CEP é obrigatório</p>
        )}
        {errors.cep?.type === "maxLength" &&
          <p className="text-roboto text-sm text-red-danger" role="alert">Esse CEP é muito grande</p>
        }
        {errors.cep?.type === "minLength" &&
          <p className="text-roboto text-sm text-red-danger" role="alert">Esse CEP é muito pequeno</p>
        }
      </div>
    
      <div>
        <input 
          className="p-3 w-full font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark"
          placeholder="Rua"
          {...register("rua", { required: true, maxLength: 40 })}
        />
      </div>

      <div className="flex gap-3">
        <input 
          className="p-3 w-[200px] max-mobile:w-14 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="Número"
          type="number" 
          min={1}
          {...register("numero", { required: true, maxLength: 5 })}
        />
        <input 
          className="p-3 flex-1 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="Complemento/Apto"
          {...register("complemento", { maxLength: 40 })}
        />
      </div>

      <div className="flex gap-3">
        <input 
          className="p-3 w-[200px] max-mobile:w-24 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="Bairro"
          {...register("bairro", { required: true, maxLength: 40 })}
        />
        <input 
          className="p-3 flex-1 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="Cidade"
          {...register("cidade", { required: true, maxLength: 40 })}
        />
        <input 
          className="p-3 w-[60px] max-mobile:w-12 font-roboto text-sm text-base-title bg-base-input rounded-[4px] border border-base-button focus:border-yellow-dark" 
          placeholder="UF"
          type="text"
          {...register("uf", { required: true, maxLength: 2 })}
        />
      </div>
      <input className="mt-8 p-2 bg-purple font-roboto font-bold text-sm text-white rounded-md cursor-pointer hover:bg-purple-dark duration-200" type="submit" value="CONFIRMAR ENDEREÇO"/>
    </form>
  )
}