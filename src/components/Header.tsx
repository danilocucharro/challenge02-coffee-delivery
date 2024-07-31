import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'

export function Header() {
  return(
    <header className="w-full px-40 h-28 fixed top-0 bg-background">
      <div className="h-full flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="coffee delivery logo" />
        </Link>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center p-2 bg-purple-light rounded-md text-purple-dark">
            <MapPin size={24} color="#8047F8" weight="fill"/>
            <span className="font-roboto">Porto Alegre, RS</span>
          </div>

          <Link to="/checkout" className="p-2 bg-yellow-light rounded-md text-yellow-dark hover:bg-yellow hover:text-white duration-200">
            <ShoppingCart size={24} weight="fill" />
          </Link>
        </div>
      </div>
    </header>
  )
}