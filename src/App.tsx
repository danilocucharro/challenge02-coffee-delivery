import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { OrderConfirmed } from "./pages/OrderConfirmed"
import { CartProvider } from "./contexts/CartContext"
import { UserProvider } from "./contexts/UserContext"

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/checkout",
      element: <Checkout />
    },
    {
      path: "/checkout/order-confirmed",
      element: <OrderConfirmed />
    }
  ])
  
  return (
    <UserProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </UserProvider>
  )
}