import { MapPin, ShoppingCart } from 'phosphor-react'
import logo from '../assets/logo.png'

export function Header() {
  return(
    <header className="w-full px-40 h-28 fixed top-0 bg-background">
      <div className="h-full flex items-center justify-between">
        <div>
          <img className="w-20 h-10" src={logo} alt="coffee delivery logo" />
        </div>

        <div className="flex items-center gap-3">
          <div className="flex gap-1 items-center p-2 bg-purple-light rounded-md text-purple-dark">
            <MapPin size={24} color="#8047F8" weight="fill"/>
            <span className="font-roboto">Porto Alegre, RS</span>
          </div>

          <button className="p-2 bg-yellow-light rounded-md">
            <ShoppingCart size={24} color="#C47F17" weight="fill" />
          </button>
        </div>
      </div>
    </header>
  )
}