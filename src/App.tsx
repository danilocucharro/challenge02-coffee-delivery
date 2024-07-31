import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"
import { OrderConfirmed } from "./pages/OrderConfirmed"

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/checkout",
      element: <Checkout/>
    },
    {
      path: "/checkout/order-confirmed",
      element: <OrderConfirmed />
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}