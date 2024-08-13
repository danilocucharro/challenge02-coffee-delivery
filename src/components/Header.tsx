import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from '../contexts/CartContext'
import { UserContext } from '../contexts/UserContext'

export function Header() {
  const { cartItems } = useContext(CartContext)
  const { address } = useContext(UserContext)

  return(
    <header className="w-full px-40 h-28 fixed top-0 bg-background max-mobile:py-5 max-mobile:px-5 max-mobile:h-auto">
      <div className="h-full flex items-center justify-between max-mobile:flex-col max-mobile:gap-2">
        <Link to="/">
          <img src={logo} alt="coffee delivery logo" />
        </Link>

        <div className="flex max-mobile:flex-1 items-center max-mobile:justify-between gap-3">
          <div className="flex gap-1 items-center p-2 bg-purple-light rounded-md text-purple-dark">
            <MapPin size={24} color="#8047F8" weight="fill" className="max-mobile:size-5"/>
            {!address.cidade 
              ? <span className="font-roboto max-mobile:text-xs">Sem endereço</span>
              : <span className="font-roboto max-mobile:text-xs">{address.cidade}, {address.uf.toUpperCase()}</span>
            }
          </div>

            <div className="flex w-[60px]">
            <Link to="/checkout" className="flex items-center justify-center p-2 bg-yellow-light rounded-md text-yellow-dark hover:bg-yellow hover:text-white duration-200">
              <ShoppingCart size={24} weight="fill" />
            </Link>
            {cartItems.length > 0 &&
              <span className="flex relative top-[-0.5rem] left-[-0.5rem] w-5 h-5 bg-yellow-dark rounded-full justify-center items-center font-roboto text-xs font-bold text-white">
                {cartItems.length}
              </span>
            }
            </div>
          </div>
        </div>
    </header>
  )
}