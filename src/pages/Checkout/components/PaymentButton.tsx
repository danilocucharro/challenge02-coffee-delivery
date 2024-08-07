import { ReactNode } from "react"

interface PaymentButtonProps {
  children: ReactNode,
  paymentType: string,
  paymentMethodValue: string,
  onChecked: (paymentType: string) => void
}

export function PaymentButton({ 
  children, 
  paymentType, 
  paymentMethodValue,
  onChecked
}: PaymentButtonProps) {
  return(
    <label className="flex flex-1 items-center text-nowrap p-4 gap-3 bg-base-button text-xs text-base-text font-roboto rounded-md has-[:checked]:bg-purple-light has-[:checked]:ring-purple has-[:checked]:ring-1 hover:cursor-pointer">
      {children}
      <span>
        {paymentType}
      </span>
      <input type="radio" onClick={() => onChecked(paymentType)} name="payment-method" value={paymentMethodValue} className="checked:bg-purple hidden"/>
    </label>
  )
}