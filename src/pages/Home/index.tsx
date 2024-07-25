import { Header } from "../../components/Header";
import { Banner } from "./components/Banner";
import { CoffeeCard } from "./components/CoffeeCard";

export function Home() {
  return(
    <div className="bg-background">
      <Header />
      <Banner />
      
      <div className="mt-10 px-40 bg-background">
      <h2 className="font-extrabold text-3xl font-baloo2 mb-14">Nossos cafés</h2>
        <div className="grid grid-cols-4 w-full h-auto gap-8">
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
          <CoffeeCard />
        </div>
      </div>
    </div>
  )
}