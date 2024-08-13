import { Toaster } from "sonner";
import { Header } from "../../components/Header";
import { Banner } from "./components/Banner";
import { CoffeeList } from "./components/CoffeeList";

export function Home() {
  return(
    <div className="bg-background">
      <Toaster position="top-center" richColors />
      <Header />
      <Banner />
      <CoffeeList />
    </div>
  )
}