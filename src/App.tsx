import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Home } from "./pages/Home"
import { Checkout } from "./pages/Checkout"

export function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>
    },
    {
      path: "/checkout",
      element: <Checkout/>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}