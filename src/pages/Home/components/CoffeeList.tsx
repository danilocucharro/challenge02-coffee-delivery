import { CoffeeCard } from "./CoffeeCard";

export function CoffeeList() {

  return(
    <div className="mt-10 px-40 max-mobile:px-0  bg-background">
      <h2 className="font-extrabold text-3xl font-baloo2 mb-14 max-mobile:text-center max-mobile:text-4xl">Nossos cafés</h2>
        <div className="grid grid-cols-4 w-full h-auto gap-8 max-mobile:flex flex-col items-center">
          <CoffeeCard 
            imgName="bg-traditional"
            tag={["TRADICIONAL"]}
            name="Expresso Tradicional"
            description="O tradicional café feito com água quente e grãos moídos"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-american"
            tag={["TRADICIONAL"]}
            name="Expresso Americano"
            description="Expresso diluído, menos intenso que o tradicional"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-creme"
            tag={["TRADICIONAL"]}
            name="Expresso Cremoso"
            description="Café expresso tradicional com espuma cremosa"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-cold"
            tag={["TRADICIONAL", "GELADO"]}
            name="Expresso Gelado"
            description="Bebida preparada com café expresso e cubos de gelo"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-with-milk"
            tag={["TRADICIONAL", "COM LEITE"]}
            name="Café com Leite"
            description="Meio a meio de expresso tradicional com leite vaporizado"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-latte"
            tag={["TRADICIONAL", "COM LEITE"]}
            name="Latte"
            description="Uma dose de café expresso com o dobro de leite e espuma cremosa"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-capuccino"
            tag={["TRADICIONAL", "COM LEITE"]}
            name="Capuccino"
            description="Bebida com canela feita de doses iguais de café, leite e espuma"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-macchiato"
            tag={["TRADICIONAL", "COM LEITE"]}
            name="Macchiato"
            description="Café expresso misturado com um pouco de leite quente e espuma"
            price={9.90}
            amount={1}
          />
          
          <CoffeeCard 
            imgName="bg-mocaccino"
            tag={["TRADICIONAL", "COM LEITE"]}
            name="Mocaccino"
            description="Café expresso com calda de chocolate, pouco leite e espuma"
            price={9.90}
            amount={1}
          />
          
          <CoffeeCard 
            imgName="bg-hot-chocolate"
            tag={["ESPECIAL", "COM LEITE"]}
            name="Chocolate Quente"
            description="Bebida feita com chocolate dissolvido no leite quente e café"
            price={9.90}
            amount={1}
          />
          
          <CoffeeCard 
            imgName="bg-cuban"
            tag={["ESPECIAL", "ALCOÓLICO", "GELADO"]}
            name="Cubano"
            description="Drink gelado de café expresso com rum, creme de leite e hortelã"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-hawaian"
            tag={["ESPECIAL"]}
            name="Havaiano"
            description="Bebida adocicada preparada com café e leite de coco"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-arabian"
            tag={["ESPECIAL"]}
            name="Árabe"
            description="Bebida preparada com grãos de café árabe e especiarias"
            price={9.90}
            amount={1}
          />

          <CoffeeCard 
            imgName="bg-irish"
            tag={["ESPECIAL", "ALCOÓLICO"]}
            name="Irlandês"
            description="Bebida a base de café, uísque irlandês, açúcar e chantilly"
            price={9.90}
            amount={1}
          />
        </div>
      </div>
  )
}